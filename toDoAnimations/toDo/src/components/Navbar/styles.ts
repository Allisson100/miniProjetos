import { styled , keyframes } from 'styled-components'

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

interface AnimationData {
    $startAnimation: boolean;
    $positionElementStateX: number;
    $positionElementStateY: number;
    $textLength: number;
    $numbersLine: number;
    $elementWidth: number;
    $elementHeigth: number;
}

const pencilAnimationStart = (x: number , y: number , textLength: number , numbersLine: number, elementWidth: number , elementHeigth: number) => keyframes`

    0% {
        left: 50%;
        top: 0;
    }

    25% {
        left: ${x}px;
        top: ${numbersLine === 3 ? `${y + 36}px` : numbersLine > 3 ? `${y + (16 * numbersLine) + (Math.floor(elementHeigth / 18))}px` : `${y}px`};
        transform: rotate(190deg);
        scale: 2;
    }

    75% {
        left: ${numbersLine > 1 ? `${elementWidth * 1.1}px` : `${x + (17 * textLength)}px`};
        top: ${numbersLine === 3 ? `${y + 36}px` : numbersLine > 3 ? `${y + (16 * numbersLine) + (Math.floor(elementHeigth / 18))}px` : `${y}px`};
        transform: rotate(190deg);
        scale: 2;
    }

    100% {
        left: 50%;
        top: 0;
        transform: translate(-190deg);
        scale: 1;
    }
`


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

export const PencilImage = styled.img<AnimationData> `
    width: 50px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    animation: ${({ $startAnimation , $positionElementStateX , $positionElementStateY , $textLength , $numbersLine , $elementWidth , $elementHeigth}: AnimationData) => $startAnimation ? pencilAnimationStart($positionElementStateX , $positionElementStateY , $textLength , $numbersLine , $elementWidth , $elementHeigth) : 'none'} 2s linear;
    z-index: 10000;
`

export const EraserImage = styled.img `
    width: 50px;
    height: 50px;
    position: absolute;
    left: 53%;
    top: 7%;
`