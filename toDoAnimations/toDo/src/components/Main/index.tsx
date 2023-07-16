import React , { useState } from 'react'
import { Container , InputButtonContainer , InputContainer, Button , CardContainer , CardButton , CardButtonContainer , CardText } from './styles'

interface toDoListData {
    id: number;
    ref: React.RefObject<HTMLDivElement>;
    completed: boolean;
    text: string;
}

function Main () {

    const [inputValue , setInputValue] = useState('')
    const [toDoList , setToDoList] = useState<toDoListData[]>([])

    function handleInputValue (e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function createNewCard () {

        if(inputValue === '') {
            alert('Digite alumga coisa')
            return
        }

        const newCard: toDoListData = {
            id: Math.random(),
            ref: React.createRef(),
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
        setToDoList((prevTodos) => prevTodos.map(
            (todo) => todo.id !== id ? todo : {... todo, completed: !todo.completed}
        ))
    }

    return (
        <Container>
            <InputButtonContainer>
                <InputContainer
                    type="text" 
                    placeholder='Digite seus compromissos aqui !!'
                    onChange={handleInputValue}
                    value={inputValue}
                />
                <Button onClick={createNewCard}>Adicionar</Button>
            </InputButtonContainer>

            {toDoList.map((todo) => (
                <CardContainer key={todo.id} ref={todo.ref} completed={todo.completed}>
                    <CardText completed={todo.completed}>{todo.text}</CardText>
                    <CardButtonContainer>
                        <CardButton onClick={() => {completeToDo(todo.id)}}>
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