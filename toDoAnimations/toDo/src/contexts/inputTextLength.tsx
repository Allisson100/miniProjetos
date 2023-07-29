import { createContext, useState } from "react"

interface Props {
    children?: React.ReactNode;
}

interface InputTextLengthData {
    inputTextLengthState: number;
    setInputTextLengthState: (textLength: number) => void
}

const initialState = {
    inputTextLengthState: 0,
    setInputTextLengthState: () => null
}

const InputTextLengthContext = createContext<InputTextLengthData>(initialState)

function InputTextLengthProvider ({children}: Props) {

    const [inputTextLengthState , setInputTextLengthState] = useState(initialState.inputTextLengthState)

    return (
        <InputTextLengthContext.Provider value={{inputTextLengthState , setInputTextLengthState}}>
            {children}
        </InputTextLengthContext.Provider>
    )   
}

export { InputTextLengthContext , InputTextLengthProvider }