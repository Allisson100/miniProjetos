import {styled} from "styled-components";

import { Props } from '../Navbar/styles'

export const FooterContainer = styled.footer<Props> `
    width: 100%;
    height: 10%;

    background-color: ${({ theme }) => (theme.colors.mainColor)};

    padding: 2rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => (theme.colors.textColor)};
`

export const Logo = styled.h1 `
    font-weight: bold;
    text-transform: uppercase;
`

export const P = styled.p `
    font-size: 1.5rem;
`

export const SocialMediaContainer = styled.div `
    display: flex;
    gap: 1rem;
`

export const Span = styled.span `
    font-size: 1.5rem;
    cursor: pointer;
    transition: .2s;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`