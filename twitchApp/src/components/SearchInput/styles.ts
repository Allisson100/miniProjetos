import { styled } from 'styled-components'

export const InputContainer = styled.header `
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: 1rem 0;
`

export const Input = styled.input `
    width: 60%;
    height: 100%;
    border-radius: .5rem;
    padding: .5rem;
    color: black;
    font-size: 1.5rem;

    &:focus {
        outline: 1.5px solid black;
    }
`

export const InputButton = styled.button `
    height: 100%;
    border-radius: .5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s;
    background-color: transparent;
    border: 2px solid #fff;
    font-weight: 700;
    font-size: 1.1rem;


    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`