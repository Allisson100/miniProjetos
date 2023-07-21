import { styled } from 'styled-components'

import { Props } from '../Navbar/styles'

interface CardData {
    theme: {
        colors: {
            mainColor: string;
            secundaryColor: string;
            thirColor: string;
            textColor: string;
        }
    };
    completed: boolean;
}

export const Container = styled.main<Props> `
    width: 100%;
    min-height: calc(100% - 100px);


    color: ${({ theme }) => (theme.colors.textColor)};
    background-color: ${({ theme }) => (theme.colors.thirColor)};

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 2rem;
`

export const InputButtonContainer = styled.div `
    width: 100%;
    height: 3.5rem;

    display: flex;
    justify-content: center;
`

export const InputContainer = styled.input `
    width: 80%;
    height: 100%;

    border: 1px solid black;
    border-radius: 8px;

    font-size: 1.7rem;

    padding: 1rem;
    transition: .1s;
    
    &:focus {
        border: 2px solid black;
    }
`

export const Button = styled.button<Props> `
    width: 10%;
    height: 100%;

    border-radius: 8px;
    padding: 1rem;

    color: ${({ theme }) => (theme.colors.textColor)};
    background-color: ${({ theme }) => (theme.colors.secundaryColor)};

    font-size: 1.1rem;
    
    transition: .2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

export const CardContainer = styled.div<CardData> `
    width: 90%;

    transition: .5s;

    opacity: ${({completed}) => (completed ? 0.5 : 1)};
    

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => (theme.colors.textColor)};
    background-color: ${({ theme }) => (theme.colors.secundaryColor)};

    font-size: 2rem;

    padding: 2rem 1rem;
    margin-top: 1rem;

    border-radius: 8px;
`

export const CardText = styled.h2<CardData> `
    color: ${({ theme }) => (theme.colors.textColor)};
    font-size: 2rem;
    text-decoration: ${({completed}) => (completed ? 'line-through' : 'none')};

`

export const CardButtonContainer = styled.div `
    display: flex;
    gap: 1rem;

    width: auto;
    height: 100%;
`

export const CardButton = styled.button<Props> `
    width: auto;
    height: 100%;

    border-radius: 8px;
    padding: 1rem;

    color: ${({ theme }) => (theme.colors.textColor)};
    background-color: ${({ theme }) => (theme.colors.thirColor)};

    font-size: 1.1rem;
    
    transition: .2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`