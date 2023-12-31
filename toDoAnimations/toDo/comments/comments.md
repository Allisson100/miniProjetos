# Context API

# Criando a variável de Contexto

Primeiro criei um arquivo chamado switch.tsx, pois eu queria guardar o estado do switch se ele está ativado ou não:

    import { createContext } from "react"

    interface Props {
        children?: React.ReactNode;
    }


    const SwitchState = createContext<boolean>(true)

    function SwitchProvider ({children}: Props) {
        return(
            <SwitchState.Provider value={true}>
                {children}
            </SwitchState.Provider>
        )
    }

    export {SwitchState , SwitchProvider}

- Importamos o createContext.
- Criamos a interface do typescript
- Definimos uma constante que terá o contexto
- Agora precisamos criar o provider desse Contexto, pois é nesse Provider que vamos compartilhar o valor da variável
- Para criar o Provider é só colocar a tag:

  <nome_da_const_de_contexto.Provider value={true}>
  {children}
  </nome_da_const_de_contexto.Provider>

- O valor de value é obrigatório
- E depois exportamos tanto o Provider como a variável de Contexto.

# Deixando o código organizado

Para utilizarmos varias variáveis de Contexto diferentes temos que Criar diversos Provider e lá no App.tsx envolver todo o nosso componente nele.

Vale lembrar que com o ContextAPI nunca vamos conseguir evitar essa quantiade Provider, um envolvendo o outro, mas o que podemos fazer é criar um arquivo a parte, importar todos os Provider lá e deixar essa "bagunça" em um arquivo separado.

Então dentro da própria pasta de context vamos criar um arquivo index.tsx:

    import { SwitchProvider } from './switch'

    interface Props {
        children?: React.ReactNode;
    }

    export default function ContextProvider({ children }: Props) {
        return (
            <SwitchProvider>
                {children}
            </SwitchProvider>
        )
    }

Apenas importamos o Provider e criamos um novo Provider chamado ContextProvider, é ele que vai conter todos os Provider das variáveis de contextos existentes.

# Utilizano a váriavel de contexto

Como eu disse primeiro temos que envolver todo o código com o Provider.

Arquivo App.tsx:

    import ContextProvider from './contexts/index'
    import Home from './pages/Home'
    import GlobalStyles from './styles/global'

    import theme from './styles/theme'
    import { ThemeProvider , DefaultTheme } from 'styled-components'

    function App() {

    const wTheme: DefaultTheme = theme.dark

        return (
            <ThemeProvider theme={wTheme}>
                <ContextProvider>
                    <GlobalStyles />
                    <Home />
                </ContextProvider>
            </ThemeProvider>
        )
    }

    export default App

- Importamos o Provider (import ContextProvider from './contexts/index')
- E envolvemos todo o código nele
- Como podemos ver futuramente vamos criar um Contexto para os temas para saber se é tema dark ou light

Agora pricesamos acessar a variável de COntexto que criamos.

No noss caso vamos utilizá-la dentro do arquivo de Navbar.

- Importamos: import { useContext } from 'react'
- Importamos: import { SwitchState } from '../../contexts/switch'

Precisamos importar agora o useContext, pois queremos usar e não criar e também a nossa variável de Contexto.

Para utilizá-la é simples, basta ir dentro do componente e digitar:

    const teste = useContext(SwitchState)

A variável teste sempre terá o valor da nossa variável de Contexto, que nesse caso é a SwitchState que vai ser sempre true ou false.

# Mudando a variável de estado

Como podemos ver o valor dessa variável de Contexto ainda está estática, vamos agora ver como alterar seu valor e dixar ele dinamico pra ser semelhante ao que acontece no Zustand.

    import { createContext , useState } from "react"

    interface Props {
        children?: React.ReactNode;
    }

    interface SwitchStateData {
        switchState: boolean,
        setSwitchState: (switchState: boolean) => void
    }

    const initialState = {
        switchState: true,
        setSwitchState: () => null
    }


    const SwitchContext = createContext<SwitchStateData>(initialState)

    function SwitchProvider ({children}: Props) {

        const [switchState , setSwitchState] = useState(initialState.switchState)


        return(
            <SwitchContext.Provider value={{switchState , setSwitchState}}>
                {children}
            </SwitchContext.Provider>
        )
    }

    export {SwitchContext , SwitchProvider}

Eu apenas criei uma variável de estado com useState e coloquei essa função como value no Provider.

### Alguns testes que fiz

const [scroll, setScroll] = useState(false);
const [scrollY, setScrollY] = useState(0);

    const [elementY, setElementY] = useState(0);

    const [startAnimation , setStartAnimation] = useState(false)

    const { switchState , setSwitchState } = useContext(SwitchContext)
    const { completeButtonState } = useContext(CompleteButtonContext)
    const { positionElementState } = useContext(PositionElement)


    function handleSwitchChange () {
        setSwitchState(!switchState)
    }

    useEffect(() => {

        if(completeButtonState) {
            setStartAnimation(true)
            document.body.style.overflow = 'hidden'
        } else {
            setStartAnimation(false)
            document.body.style.overflow = 'auto'
        }

    }, [completeButtonState , scroll])

    useEffect(() => {
        if(startAnimation) {
            setScroll(true)
        } else {
            setScroll(false)
        }

    }, [startAnimation])

    useEffect(() => {
        console.log("Scroll", scroll);

        if(scroll) {
            setElementY(((positionElementState.top - (positionElementState.height / 2) - 22) + scrollY))
        } else {
            setElementY((positionElementState.top - (positionElementState.height / 2) - 22))
        }
    }, [scroll , positionElementState.top , positionElementState.height , scrollY])

    // const elementY: number = (scroll)?
    //     ((positionElementState.top - (positionElementState.height / 2) - 22) + scrollY):    (positionElementState.top - (positionElementState.height / 2) - 22)

    const elementX: number = (positionElementState.x + 5)

    function handleScroll () {
        setScrollY(window.scrollY)
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    function animationEnd () {
        document.body.style.overflow = 'auto'
        setStartAnimation(!startAnimation)
    }


    useEffect(() => {
        const pencilImageElement = document.getElementById('pencilImage')

        if(pencilImageElement) {

            pencilImageElement.addEventListener('animationend', animationEnd)

            return () => {
                pencilImageElement.removeEventListener('animationend', animationEnd)
            }
        }
    },[])

### O que falta fazer

- Lançar na Vercel

### Comentários

Basicamente usei somente a COntext API para gerenciar o estado, foi bom para estudar.

### Funções

    const deleteToDo = useCallback((id: number) => {

        setToDoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }, [])

    const completeToDo = useCallback((id: number) => {

        setTimeout(() => {
            setToDoList((prevTodos) => prevTodos.map(
                (todo) => todo.id !== id ? todo : {... todo, completed: !todo.completed}
            ))
        }, 2000)
    }, [])

Preciso estuda mais sobre a função .getBoundingClientRect() para futuros projetos.

Estudar mais sobre os Temas.
