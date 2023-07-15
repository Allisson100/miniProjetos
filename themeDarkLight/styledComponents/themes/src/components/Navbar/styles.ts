import {styled} from "styled-components";

interface Props {
    theme: {
        colors: {
            mainColor: string;
            secundaryColor: string;
            textColor: string;
        }
    }
}

export const Header = styled.header<Props> `
    width: 100%;
    height: 100px;

    background-color: ${({ theme }: Props) => (theme.colors.mainColor)};
    color: ${({ theme }: Props) => (theme.colors.textColor)};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 3rem;
`

export const UlList = styled.ul `
    display: flex;
    gap: 2.5rem;
    list-style: none;
`

export const ListItem = styled.li `
    font-size: 1.5rem;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`