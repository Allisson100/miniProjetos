import { createContext , useState } from "react"

interface Props {
    children?: React.ReactNode;
}

interface CompleteButtonStateData {
    completeButtonState: boolean,
    setCompleteButtonState: (switchState: boolean) => void
}

const initialState = {
    completeButtonState: false,
    setCompleteButtonState: () => null
}


const CompleteButtonContext = createContext<CompleteButtonStateData>(initialState)

function CompleteButtonStateProvider ({children}: Props) {

    const [completeButtonState , setCompleteButtonState] = useState(initialState.completeButtonState)
   
    return(
        <CompleteButtonContext.Provider value={{completeButtonState , setCompleteButtonState}}>
            {children}
        </CompleteButtonContext.Provider>
    )
}

export {CompleteButtonContext , CompleteButtonStateProvider}