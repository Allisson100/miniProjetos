import { Header , UlList , ListItem ,Logo } from './styles'
import { useState } from 'react'

import Switch from 'react-switch'

import {useSwitchState} from '../../services/store/useSwitchState'

function Navbar() {

    const { switchState } = useSwitchState()
    const { setSwitchState } = useSwitchState();    

    const [checked , setChecked] = useState(switchState)

    function handleSwitchChange () {
        setChecked(!checked)
        setSwitchState(!checked)
    } 
 

    return (
        <Header>
            <Logo>logo</Logo>
            <UlList>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>News</ListItem>
                <ListItem>Test</ListItem>
                <ListItem>Test</ListItem>
            </UlList>
            <Switch
                checked={checked}
                onChange={handleSwitchChange}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={'#000000'}
                onColor={'#515661'}
                onHandleColor={'#ffffff'}
            />
        </Header>
    )
}

export default Navbar