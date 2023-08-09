import { DisplayVideoContainer , MainDisplayVideo , SecondDisplayVideo , ThirdDisplayVideo , DisplayIframe } from './styles'

function DisplayVideo () {
    return (
        <DisplayVideoContainer>
            <MainDisplayVideo>
                <DisplayIframe 
                    src="https://clips.twitch.tv/embed?clip=AntsyInquisitiveWebHumbleLife-nAalnC4uQZ9e_PkP&parent=localhost" 
                >
                </DisplayIframe>
            </MainDisplayVideo>

            <SecondDisplayVideo>
                <DisplayIframe 
                    src="https://clips.twitch.tv/embed?clip=AntsyInquisitiveWebHumbleLife-nAalnC4uQZ9e_PkP&parent=localhost" 
                    >
                </DisplayIframe>
            </SecondDisplayVideo>

            <ThirdDisplayVideo>
                <DisplayIframe 
                    src="https://clips.twitch.tv/embed?clip=AntsyInquisitiveWebHumbleLife-nAalnC4uQZ9e_PkP&parent=localhost" 
                >
                </DisplayIframe>
            </ThirdDisplayVideo>
            
        </DisplayVideoContainer>
    )
}

export default DisplayVideo