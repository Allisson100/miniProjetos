import React , { useEffect, useState , useContext, useCallback } from 'react'

import { Container , InputButtonContainer , InputContainer, Button , } from './styles'

import { PositionElement } from '../../contexts/positionElement'
import { InputTextLengthContext } from '../../contexts/inputTextLength'
import { PencilAnimationContext } from '../../contexts/pencilAnimation'
import { EraserAnimationContext } from '../../contexts/eraserAnimation'

import Card from '../Card'

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
    const { setInputTextLengthState } = useContext(InputTextLengthContext)   
    const { setPencilAnimationState } = useContext(PencilAnimationContext)
    const { setEraserAnimationState } = useContext(EraserAnimationContext)

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

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if(e.target.value.length === 150) {
            alert('Limite de caracteres atingidos (150)')
        }
    }

    const createNewCard = () => {
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

    const deleteToDo = useCallback((id: number) => {
        setToDoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }, [])

    const completeToDo = useCallback((id: number) => {
        setTimeout(() => {
            setToDoList((prevTodos) => prevTodos.map(
                (todo) => todo.id !== id ? todo : {... todo, completed: !todo.completed}
            ))
        }, 2000)
    }, [])

    const getPosition = useCallback((id: number, completed: boolean) => {
        const element = document.getElementById(`${id}`)        

        if(element) {
            
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

            if(typeof textLength === 'number') {
                if(textLength > 70) {
                    setInputTextLengthState(70)
                } else {
                    setInputTextLengthState(textLength)
                }
            }

            if(completed) {
                setPencilAnimationState(false)
                setEraserAnimationState(true)
            } else {
                setPencilAnimationState(true)
                setEraserAnimationState(false)
            }
        } 
    },[
        setPositionElementState,
        setInputTextLengthState,
        setPencilAnimationState,
        setEraserAnimationState 
    ])

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            createNewCard()
        }
    }
    
    return (
        <Container>
            <InputButtonContainer>
                <InputContainer
                    type="text" 
                    placeholder='Digite seus compromissos aqui !! (maximo 150 caracteres)'
                    onChange={handleInputValue}
                    onKeyDown={handleKeyPress}
                    value={inputValue}
                    maxLength={150}
                />
                <Button onClick={createNewCard}>Adicionar</Button>
            </InputButtonContainer>

            {toDoList.map((todo) => (
                <Card 
                    todo={todo}
                    completeToDo={completeToDo}
                    getPosition={getPosition}
                    deleteToDo={deleteToDo}
                />
            ))}
        </Container>  
    )
}

export default Main