import { styled } from 'styled-components'

export interface Props {
    theme: {
        colors: {
            mainColor: string;
            secundaryColor: string;
            thirColor: string;
            textColor: string;
        }
    }
}

export const Container = styled.header<Props> `
    width: 100%;
    height: 100px;

    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textColor};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 2rem;
`

export const Logo = styled.h1<Props> `
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
`

export const IconContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
export const Image = styled.img `
    width: 25px;
    height: 25px;
`

export const PencilImage = styled.img `
    width: 50px;
    height: 100px;
    position: absolute;
    left: 50%;
`

export const EraserImage = styled.img `
    width: 50px;
    height: 50px;
    position: absolute;
    left: 53%;
    top: 7%;
`