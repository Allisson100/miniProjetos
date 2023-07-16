import Navbar from "../../components/Navbar"

import { useContext, useEffect } from 'react'
import { SwitchContext } from '../../contexts/switch'

interface Props {
    getSwitchState: (value: boolean) => void
}

function Home ({ getSwitchState }: Props) {

    const {switchState} = useContext(SwitchContext)

    useEffect(() => {

        getSwitchState(switchState)

    }, [switchState , getSwitchState])

  

    return (
        <Navbar />
    )
}

export default Home