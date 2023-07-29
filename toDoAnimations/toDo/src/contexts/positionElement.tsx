import { createContext, useState } from "react";

interface Props {
    children?: React.ReactNode;
}

interface PositionElementData {
    positionElementState: {
        x: number;
        y: number;
        width: number;
        height: number;
        right: number;
        bottom: number;
        top: number;
        left: number;
    },
    setPositionElementState: (positionElementState: {
        x: number;
        y: number;
        width: number;
        height: number;
        right: number;
        bottom: number;
        top: number;
        left: number;
    }) => void
}

const initialState = {
    positionElementState: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
    },
    setPositionElementState: () => null
}

const PositionElement = createContext<PositionElementData>(initialState)

function PositionElementProvider ({children}: Props) {

    const [positionElementState , setPositionElementState] = useState(initialState.positionElementState)


    return (
        <PositionElement.Provider value={{positionElementState , setPositionElementState}}>
            {children}
        </PositionElement.Provider>
    )

}

export { PositionElement ,  PositionElementProvider }