import { DisplayVideoContainer, MainDisplayVideo, IframeContainer , DisplayIframe, LeftArrow, RigthArrow } from './styles'

import leftArrow from '../../assets/img/leftArrow.png'
import rigthArrow from '../../assets/img/rigthArrow.png'

import mock from '../../assets/mock'

import { useState , useEffect } from 'react'


function DisplayVideo() {

    const initialData = [1, 2, 3, 4, 5, 6]
    const [arrayIds , setArrayIds] = useState(initialData)

    const [firstIframe , setFirstIframe] = useState(1)
    const [secondIframe , setSecondIframe] = useState(2)
    const [thirdframe , setThirdframe] = useState(6)
   

    function handleIdAndAnimationLeftArrow () {

        setArrayIds((prevIds) => {
            const newArray = [...prevIds]
            const lastItem = newArray.pop()

            if(lastItem !== undefined) {
                newArray.unshift(lastItem)
            }
            
            return newArray
        })
    }

    function handleIdAndAnimationRightArrow () {
        setArrayIds((prevIds) => {
            const newArray = [...prevIds]
            const firstItem = newArray.shift()

            if(firstItem !== undefined) {
                newArray.push(firstItem)
            }
            
            return newArray
        })

        
    }

    useEffect(() => {
        setFirstIframe(arrayIds[0])
        setSecondIframe(arrayIds[1])
        setThirdframe(arrayIds[5])
    }, [arrayIds])

    function handleChangeVideo (id: number) {
        console.log(id);
        
        // if(id === secondIframe) {
        //     handleIdAndAnimationRightArrow()
        // }

        // if(id === thirdframe) {
        //     handleIdAndAnimationLeftArrow()
        // }
    }

    console.log(arrayIds);
    

    return (
        <DisplayVideoContainer>
            <LeftArrow onClick={handleIdAndAnimationLeftArrow}>
                <img src={leftArrow} alt="left arrow"/>
            </LeftArrow>
            <RigthArrow onClick={handleIdAndAnimationRightArrow}>
                <img src={rigthArrow} alt="rigth arrow" />
            </RigthArrow>

            {mock.map((e) => (
                <MainDisplayVideo
                    onClick={() => handleChangeVideo(e.id)}
                    key={e.id} 
                    id={e.id} 
                    $firstIframe={firstIframe}
                    $secondIframe={secondIframe}
                    $thirdframe={thirdframe}
                >
                    <IframeContainer>
                        <DisplayIframe   
                            src={e.src}
                        >
                        </DisplayIframe>
                    </IframeContainer>
                </MainDisplayVideo>
            ))}

        </DisplayVideoContainer>
    )
}

export default DisplayVideo