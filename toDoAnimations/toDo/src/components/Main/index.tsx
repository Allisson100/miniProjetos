import React , { useEffect, useState , useContext } from 'react'
import { Container , InputButtonContainer , InputContainer, Button , CardContainer , CardButton , CardButtonContainer , CardText } from './styles'

import { PositionElement } from '../../contexts/positionElement'
import { CompleteButtonContext } from '../../contexts/completeButtonClicked'
import { InputTextLengthContext } from '../../contexts/inputTextLength'

interface ToDoListData {
    id: number;
    completed: boolean;
    text: string;
}

interface ElementRect {
    x: number;
    y: number;
    width: number;
    height: number;
    right: number;
    bottom: number;
    top: number;
    left: number;
}

function Main () {

    const { setPositionElementState } = useContext(PositionElement)
    const { setCompleteButtonState } = useContext(CompleteButtonContext)
    const { setInputTextLengthState } = useContext(InputTextLengthContext)   

    const [inputValue , setInputValue] = useState('')
    const [toDoList , setToDoList] = useState<ToDoListData[]>(() => {

        const storedToDoList = localStorage.getItem('@todoanimation:todolist')

        if(storedToDoList) {
            return JSON.parse(storedToDoList) as ToDoListData[]
        }

        return []

    })

    useEffect(()=>{
        localStorage.setItem('@todoanimation:todolist' , JSON.stringify(toDoList))
    }, [toDoList])

    function handleInputValue (e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
        if(e.target.value.length === 150) {
            alert('Limite de caracteres atingidos (150)')
        }
    }

    function createNewCard () {

        if(inputValue === '') {
            alert('Digite alguma coisa')
            return
        }

        const newCard: ToDoListData = {
            id: Math.random(),
            completed: false,
            text: inputValue
        }

        setToDoList((prevToDos) => [... prevToDos, newCard])
        setInputValue('')
    }

    function deleteToDo (id: number) {
        setToDoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    function completeToDo (id: number) {
         
        const card = toDoList.find((todo) => todo.id === id)       
        const completedStatus = card?.completed
        
        if(completedStatus) {
            setToDoList((prevTodos) => prevTodos.map(
                (todo) => todo.id !== id ? todo : {... todo, completed: !todo.completed}
            ))
        } else {
            setTimeout(() => {
                setToDoList((prevTodos) => prevTodos.map(
                    (todo) => todo.id !== id ? todo : {... todo, completed: !todo.completed}
                ))
            }, 2000)
        }
    }

    function getPosition (id: number, completed: boolean): void {

        const element = document.getElementById(`${id}`)        

        if(element && completed === false) {

            // element.scrollIntoView()
            
            const rect: ElementRect = element.getBoundingClientRect()

            setPositionElementState({
                x: rect.x, // console.log('Coordenada X:', rect.x);
                y: rect.y, // console.log('Coordenada Y:', rect.y);
                width: rect.width, // console.log('Largura:', rect.width);
                height: rect.height, // console.log('Altura:', rect.height);
                top: rect.top, 
                left: rect.left, 
                right: rect.right, // console.log('Coordenada X do canto direito:', rect.right);
                bottom: rect.bottom, // console.log('Coordenada Y do canto inferior:', rect.bottom);
            })            
            
            const textLength = element.textContent?.length     
            
            console.log(rect.width);
            console.log(rect.height);
            console.log(Math.floor(rect.height / 32));
            

            //Mesma linha botão e texto W:72 H:37
            //Duas linhas text em uma botão em outra W:127 H:37

            if(typeof textLength === 'number') {
                if(textLength > 70) {
                    setInputTextLengthState(70)
                } else {
                    setInputTextLengthState(textLength)
                }
            }
            setCompleteButtonState(true)
        } 

        if(completed === true) {
            setCompleteButtonState(false)
        }
    }
    
    return (
        <Container>
            <InputButtonContainer>
                <InputContainer
                    type="text" 
                    placeholder='Digite seus compromissos aqui !! (maximo 150 caracteres)'
                    onChange={handleInputValue}
                    value={inputValue}
                    maxLength={150}
                />
                <Button onClick={createNewCard}>Adicionar</Button>
            </InputButtonContainer>

            {toDoList.map((todo) => (
                <CardContainer 
                    key={todo.id}  
                    $completed={(todo.completed)}
                >
                    <CardText 
                        $completed={(todo.completed)} 
                        id={`${todo.id}`}
                    >{todo.text}</CardText>
                   
                    <CardButtonContainer>
                        <CardButton onClick={() => {completeToDo(todo.id); getPosition(todo.id, todo.completed)}}>
                            {(todo.completed) ? 'Retomar' : 'Completar'}
                        </CardButton>
                        <CardButton onClick={() => {deleteToDo(todo.id)}}>Excluir</CardButton>
                    </CardButtonContainer>
                </CardContainer>
            ))}

            
        </Container>  
    )
}

export default Main