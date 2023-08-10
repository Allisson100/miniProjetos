import { styled } from 'styled-components'

interface Props {
    id: number;
    $firstIframe: number;
    $secondIframe: number;
    $thirdframe: number;
}

export const DisplayVideoContainer = styled.div `
    width: 100%;
    height: 80.7%;
    background-color: transparent;
    position: relative;
    display: flex;
    justify-content: space-between;
`

export const MainDisplayVideo = styled.div<Props> `

    width: ${({ id , $firstIframe }) => (id === $firstIframe) ? '61%' : '45.2%'};
    height: ${({ id , $firstIframe }) => (id === $firstIframe) ? '93.7%' : '70%'};
    border-radius: 1rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    transition: .5s;
    left: ${({ id , $firstIframe , $secondIframe , $thirdframe }) => (id === $secondIframe) ? '36%' : (id === $thirdframe) ? '64%' : (id === $firstIframe) ? '50%' : '36%'};
    z-index: ${({ id , $firstIframe , $secondIframe , $thirdframe }) => (id === $firstIframe) ? 3 : (id === $secondIframe || id === $thirdframe) ? 2 : -1};
    transform: translate(-50%, -50%);

    &:hover {
        left: ${({ id , $secondIframe , $thirdframe }) => (id === $secondIframe) ? '30%' : (id === $thirdframe) && '70%'}
    }

`

export const IframeContainer = styled.div `
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: transparent;
    position: absolute;
    z-index: 10000;
`

export const DisplayIframe = styled.iframe `
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`

// ARROWS

export const LeftArrow = styled.button `
    width: 100px;
    height: 50px;
    margin-left: 11%;
    background-color: transparent;
    margin-top: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;transition: .2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

export const RigthArrow = styled.button `
    width: 100px;
    height: 50px;
    background-color: transparent;
    margin-right: 11%;
    margin-top: 1%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    transition: .2s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`