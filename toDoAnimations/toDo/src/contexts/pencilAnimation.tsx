import { createContext , useState } from "react"

interface Props {
    children?: React.ReactNode;
}

interface PencilAnimationStateData {
    pencilAnimationState: boolean,
    setPencilAnimationState: (animationState: boolean) => void
}

const initialState = {
    pencilAnimationState: false,
    setPencilAnimationState: () => null
}

const PencilAnimationContext = createContext<PencilAnimationStateData>(initialState)

function PencilAnimationStateProvider ({children}: Props) {

    const [pencilAnimationState , setPencilAnimationState] = useState(initialState.pencilAnimationState)
   
    return(
        <PencilAnimationContext.Provider value={{pencilAnimationState , setPencilAnimationState}}>
            {children}
        </PencilAnimationContext.Provider>
    )
}

export {PencilAnimationContext , PencilAnimationStateProvider}