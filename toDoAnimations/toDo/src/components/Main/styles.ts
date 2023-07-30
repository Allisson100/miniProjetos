import { styled } from 'styled-components'
import { Props } from '../Navbar/styles'

export const Container = styled.main<Props> `
    align-items: center;
    background-color: ${({ theme }) => (theme.colors.thirColor)};
    color: ${({ theme }) => (theme.colors.textColor)};
    display: flex;
    flex-direction: column;
    min-height: calc(100% - 100px);
    padding: 1rem 2rem;
    width: 100%;
`

export const InputButtonContainer = styled.div `
    display: flex;
    height: 3.5rem;
    justify-content: center;
    width: 100%;
`

export const InputContainer = styled.input `
    border: 1px solid black;
    border-radius: 8px;
    font-size: 1.7rem;
    height: 100%;
    padding: 1rem;
    transition: .1s;
    width: 80%;
    
    &:focus {
        border: 2px solid black;
    }

    @media screen and (max-width: 460px){
        width: 50%;
    }
`

export const Button = styled.button<Props> `
    background-color: ${({ theme }) => (theme.colors.secundaryColor)};
    border-radius: 8px;
    color: ${({ theme }) => (theme.colors.textColor)};
    font-size: 1.1rem;
    height: 100%;
    min-width: 10%;
    padding: 1rem;
    transition: .2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`


