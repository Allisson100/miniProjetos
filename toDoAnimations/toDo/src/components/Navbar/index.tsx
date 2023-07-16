import { Container , Logo , PencilImage , EraserImage , IconContainer , Image } from './styles'

import { useContext } from 'react'
import { SwitchContext } from '../../contexts/switch'

import lapisIcon from '../../assets/img/lapis.png'
import borrachaIcon from '../../assets/img/borracha.png'
import blackMoonIcon from '../../assets/icons/blackMoonIcon.png'
import whiteMoonIcon from '../../assets/icons/whiteMoonIcon.png'
import blackSunIcon from '../../assets/icons/blackSunIcon.png'
import whiteSunIcon from '../../assets/icons/whiteSunIcon.png'

import Switch from 'react-switch'

function Navbar () {

    
    const {switchState , setSwitchState} = useContext(SwitchContext)   

    function handleSwitchChange () {
        setSwitchState(!switchState)        
    }

    return (
        <Container>
            <Logo>Logo</Logo>
            <IconContainer>
                <PencilImage src={lapisIcon} alt="Lapis" />
                <EraserImage src={borrachaIcon} alt="Borracha" />
                <Image src={switchState ? whiteSunIcon : blackSunIcon} alt="Sun Icon" />
                <Switch 
                    checked={switchState}
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
                <Image src={switchState ? whiteMoonIcon : blackMoonIcon} alt="Moon ICon" />
            </IconContainer>


        </Container>
    )
}

export default Navbar