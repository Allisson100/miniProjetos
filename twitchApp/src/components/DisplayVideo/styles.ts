import { styled } from 'styled-components'

export const DisplayVideoContainer = styled.div `
    width: 100%;
    height: 80.7%;
    background-color: transparent;
    position: relative;
`

export const MainDisplayVideo = styled.div `
    width: 61%;
    height: 93.7%;
    border-radius: 1rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`

export const SecondDisplayVideo = styled.div `
    width: 45.2%;
    height: 70%;
    border-radius: 1rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 36%;
    transform: translate(-50%, -50%);
    z-index: 1;
    transition: 1s;

    &:hover {
        left: 30%;
    }
`

export const ThirdDisplayVideo = styled.div `
    width: 45.2%;
    height: 70%;
    border-radius: 1rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 64%;
    transform: translate(-50%, -50%);
    z-index: 1;
    transition: 1s;

    &:hover {
        left: 70%;
    }
`

export const DisplayIframe = styled.iframe `
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`