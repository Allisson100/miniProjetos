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