import { Container , Logo , PencilImage , EraserImage , IconContainer , Image } from './styles'

import { useCallback, useContext , useEffect , useState } from 'react'
import { SwitchContext } from '../../contexts/switch'

import lapisIcon from '../../assets/img/lapis.png'
import borrachaIcon from '../../assets/img/borracha.png'
import blackMoonIcon from '../../assets/icons/blackMoonIcon.png'
import whiteMoonIcon from '../../assets/icons/whiteMoonIcon.png'
import blackSunIcon from '../../assets/icons/blackSunIcon.png'
import whiteSunIcon from '../../assets/icons/whiteSunIcon.png'

import { PositionElement } from '../../contexts/positionElement'
import { CompleteButtonContext } from '../../contexts/completeButtonClicked'
import { InputTextLengthContext } from '../../contexts/inputTextLength'

import Switch from 'react-switch'


function Navbar () {

    const [elementY, setElementY] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [startAnimation , setStartAnimation] = useState(false)

    const { switchState , setSwitchState } = useContext(SwitchContext)
    const { completeButtonState , setCompleteButtonState } = useContext(CompleteButtonContext)
    const { positionElementState } = useContext(PositionElement)
    const { inputTextLengthState } = useContext(InputTextLengthContext)
    
    

    function handleSwitchChange () {
        setSwitchState(!switchState)        
    }    

    useEffect(() => {

        if(completeButtonState) {
            setStartAnimation(true)
            document.body.style.overflow = 'hidden'
        } else {
            setStartAnimation(false)
            document.body.style.overflow = 'auto'
        }
        
    }, [completeButtonState])

    useEffect(() => {

        const buttons = document.querySelectorAll('button')

        if(startAnimation) {
            buttons.forEach((button)=> {
                button.disabled = true
            })
        }else {
            buttons.forEach((button)=> {
                button.disabled = false
            })
        }
    }, [startAnimation])


    const animationEnd = useCallback(() => {

        document.body.style.overflow = 'auto'
        setStartAnimation(false)
        setCompleteButtonState(false)
        
    }, [setCompleteButtonState])



    useEffect(() => {
        const pencilImageElement = document.getElementById('pencilImage')

        if(pencilImageElement) {

            pencilImageElement.addEventListener('animationend', animationEnd)

            return () => {
                pencilImageElement.removeEventListener('animationend', animationEnd)
            }
        }
    },[animationEnd])

    useEffect(()=> {
        if(scrollY > 0) {
            if(positionElementState.height > 50) {
                setElementY(((positionElementState.top - (positionElementState.height / 2)) - 60) + scrollY)    
            } else {
                setElementY((positionElementState.top - positionElementState.height * 3.2) + scrollY)
            }
    
        } else {
            if(positionElementState.height > 50) {
                setElementY(((positionElementState.top - (positionElementState.height / 2))) - 60)
            } else {
                setElementY((positionElementState.top - positionElementState.height * 3.2))
            }
        }
    }, [positionElementState.height , positionElementState.top , scrollY])

    const elementX: number = (positionElementState.x - 15)

    useEffect(() => {
        if(startAnimation) {
            setScrollY(window.scrollY)
        }
    }, [startAnimation])

    return (
        <Container>
            <Logo>Logo</Logo>
            <IconContainer>
                <PencilImage 
                    src={lapisIcon} 
                    alt="Lapis" 
                    $startAnimation={startAnimation} 
                    $positionElementStateX={elementX}
                    $positionElementStateY={elementY}
                    $textLength={inputTextLengthState}
                    $numbersLine={Math.floor(positionElementState.height / 32)}
                    $elementWidth={positionElementState.width}
                    $elementHeigth={positionElementState.height}
                    id='pencilImage'
                />
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