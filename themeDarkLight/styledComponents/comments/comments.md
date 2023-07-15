# Tipagem de Props no styled components

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
        color: black;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0rem 3rem;
    `

Tem que pegar o objeto que vem das props corretamente e tipar conforme o que vem das props.
