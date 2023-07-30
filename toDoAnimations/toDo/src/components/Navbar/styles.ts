import { styled , keyframes } from 'styled-components'

export interface Props {
    theme: {
        colors: {
            mainColor: string;
            secundaryColor: string;
            thirColor: string;
            textColor: string;
        }
    };
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

interface EraserAnimationData {
    $startEraserAnimation: boolean;
    $positionElementStateX: number;
    $positionElementStateY: number;
    $textLength: number;
    $numbersLine: number;
    $elementWidth: number;
    $elementHeigth: number;
}

const pencilAnimationStart = (x: number , y: number , textLength: number , numbersLine: number, elementWidth: number , elementHeigth: number) => keyframes`

    0% {
        left: calc(0% + 125px);
        top: 0;
    }

    25% {
        left: 
            ${x}px;
        top: 
            ${numbersLine === 3 ? `${y + 36}px` : 
            numbersLine > 3 ? `${y + (16 * numbersLine) + (Math.floor(elementHeigth / 18))}px` : 
            `${y}px`};

        scale: 2;
        transform: rotate(190deg);
    }

    75% {
        left: 
            ${numbersLine > 1 ? `${elementWidth * 1.1}px` : 
            `${x + (17 * textLength)}px`};
        top: 
            ${numbersLine === 3 ? `${y + 36}px` : 
            numbersLine > 3 ? `${y + (16 * numbersLine) + (Math.floor(elementHeigth / 18))}px` : 
            `${y}px`};

        scale: 2;
        transform: rotate(190deg);
    }

    100% {
        left: calc(0% + 125px);
        scale: 1;
        top: 0;
        transform: translate(-190deg);
    }
`

const eraserAnimationStart = (x: number , y: number , textLength: number , numbersLine: number, elementWidth: number , elementHeigth: number) => keyframes`

    0% {
        left: calc(0% + 125px + 15px);
        top: 50px;
    }

    25% {
        left: 
            ${x - 10}px;
        top: 
            ${numbersLine === 3 ? `${y + 67 + 36}px` : 
            numbersLine > 3 ? `${y + 67 + (16 * numbersLine) + (Math.floor(elementHeigth / 18))}px` : 
            `${y + 67}px`};
        scale: 2;
    }

    75% {
        left: 
            ${numbersLine > 1 ? `${elementWidth * 1.1}px` : 
            `${x + (17 * textLength)}px`};
        top: 
            ${numbersLine === 3 ? `${y + 67 + 36}px` : 
            numbersLine > 3 ? `${y + 67 + (16 * numbersLine) + (Math.floor(elementHeigth / 18))}px` : 
            `${y + 67}px`};
        scale: 2;
    }

    100% {
        left: calc(0% + 125px + 15px);
        scale: 1;
        top: 50px;
    }
`

export const Container = styled.header<Props> `
    align-items: center;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    height: 100px;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
`

export const Logo = styled.h1<Props> `
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
`

export const IconContainer = styled.div `
    align-items: center;
    display: flex;
    gap: 0.5rem;
`
export const Image = styled.img `
    height: 25px;
    width: 25px;
`

export const PencilImage = styled.img<AnimationData> `
    animation: 
        ${({ $startAnimation , $positionElementStateX , $positionElementStateY , $textLength , $numbersLine , $elementWidth , $elementHeigth}: AnimationData) => $startAnimation ? pencilAnimationStart($positionElementStateX , $positionElementStateY , $textLength , $numbersLine , $elementWidth , $elementHeigth) : 'none'} 2s linear;

    height: 100px;
    left: calc(0% + 125px);
    position: absolute;
    top: 0;
    width: 50px;
    z-index: 10000;
`

export const EraserImage = styled.img<EraserAnimationData> `
    animation: 
        ${({ $startEraserAnimation , $positionElementStateX , $positionElementStateY , $textLength , $numbersLine , $elementWidth , $elementHeigth}: EraserAnimationData) => $startEraserAnimation ? eraserAnimationStart($positionElementStateX , $positionElementStateY , $textLength , $numbersLine , $elementWidth , $elementHeigth) : 'none'} 2s linear;

    height: 50px;
    left: calc(0% + 125px + 15px);
    position: absolute;
    top: 50px;
    width: 50px;
    z-index: 10000;
`

export const SwitchContainer = styled.div `
    align-items: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 350px){
        display: none;
    }
`