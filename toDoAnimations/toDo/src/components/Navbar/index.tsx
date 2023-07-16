import { Container , Logo , PencilImage , EraserImage , IconContainer , Image } from './styles'
import { useState } from 'react'

import lapisIcon from '../../assets/img/lapis.png'
import borrachaIcon from '../../assets/img/borracha.png'
// import blackMoonIcon from '../../assets/icons/blackMoonIcon.png'
import whiteMoonIcon from '../../assets/icons/whiteMoonIcon.png'
// import blackSunIcon from '../../assets/icons/blackSunIcon.png'
import whiteSunIcon from '../../assets/icons/whiteSunIcon.png'

import Switch from 'react-switch'

function Navbar () {

    const [checked , setChecked] = useState(true)

    function handleSwitchChange () {
        setChecked(!checked)
    }

    return (
        <Container>
            <Logo>Logo</Logo>
            <IconContainer>
                <PencilImage src={lapisIcon} alt="Lapis" />
                <EraserImage src={borrachaIcon} alt="Borracha" />
                <Image src={whiteSunIcon} alt="Sun Icon" />
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
                <Image src={whiteMoonIcon} alt="Moon ICon" />
            </IconContainer>


        </Container>
    )
}

export default Navbar