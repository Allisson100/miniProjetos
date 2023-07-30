import { styled } from 'styled-components'
import { Props } from '../Navbar/styles'

interface CardData {
    $completed: boolean;
    theme: {
        colors: {
            mainColor: string;
            secundaryColor: string;
            thirColor: string;
            textColor: string;
        }
    };
}

export const CardContainer = styled.div<CardData> `
    align-items: center;
    background-color: ${({ theme }) => (theme.colors.secundaryColor)};
    border-radius: 8px;
    color: ${({ theme }) => (theme.colors.textColor)};
    display: flex;
    flex-wrap: wrap;
    font-size: 2rem;
    gap: 0.5rem;
    justify-content: space-between;
    margin-top: 1rem;
    opacity: ${({$completed}) => (($completed) ? 0.5 : 1)};
    padding: 2rem 1rem;
    transition: .5s;
    width: 90%;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const CardText = styled.p<CardData> `
    color: ${({ theme }) => (theme.colors.textColor)};
    font-size: 2rem;
    text-decoration: ${({$completed}) => (($completed) ? 'line-through' : 'none')};
    word-break: break-all;
`

export const CardButtonContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    height: 100%;
    width: auto;
`

export const CardButton = styled.button<Props> `
    background-color: ${({ theme }) => (theme.colors.thirColor)};
    border-radius: 8px;
    color: ${({ theme }) => (theme.colors.textColor)};
    font-size: 1.1rem;
    height: 100%;
    padding: 1rem;
    transition: .2s;
    width: auto;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`