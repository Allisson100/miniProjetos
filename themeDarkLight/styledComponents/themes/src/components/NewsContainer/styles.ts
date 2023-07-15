import {styled} from "styled-components";

import { Props } from '../Navbar/styles'


export const Container = styled.main<Props> `
    width: 80%;
    height: 100%;

    background-color: ${({ theme }) => (theme.colors.secundaryColor)};

    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 2rem;

    margin: 4rem auto 4rem auto;
    padding: 1rem 2rem;

    border: 5px solid white;
    border-radius: 2rem;
    box-shadow: 0 0 20px #000000;
`

export const Title = styled.h2<Props> `
    font-size: 3rem;
    text-align: center;
    color: ${({ theme }) => (theme.colors.textColor)};
`

export const Image = styled.img `
    width: 100%;
    border-radius: 2rem;
`

export const P = styled.p<Props> `
    font-size: 1.2rem;
    text-align: justify;
    color: ${({ theme }) => (theme.colors.textColor)};

    text-indent: 40px;
`

export const UlList = styled.ul `
   list-style: square;
   text-align: left;
   list-style-position: inside;

`