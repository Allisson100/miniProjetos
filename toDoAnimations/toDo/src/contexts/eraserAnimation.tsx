import { createContext , useState } from "react"

interface Props {
    children?: React.ReactNode;
}

interface EraserAnimationStateData {
    eraserAnimationState: boolean,
    setEraserAnimationState: (animationState: boolean) => void
}

const initialState = {
    eraserAnimationState: false,
    setEraserAnimationState: () => null
}

const EraserAnimationContext = createContext<EraserAnimationStateData>(initialState)

function EraserAnimationStateProvider ({children}: Props) {

    const [eraserAnimationState , setEraserAnimationState] = useState(initialState.eraserAnimationState)
   
    return(
        <EraserAnimationContext.Provider value={{eraserAnimationState , setEraserAnimationState}}>
            {children}
        </EraserAnimationContext.Provider>
    )
}

export {EraserAnimationContext , EraserAnimationStateProvider}