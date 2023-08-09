import DisplayVideo from "../../components/DisplayVideo"
import SearchInput from "../../components/SearchInput"

import { HomeContainer } from './styles'

function Home () {
    return (
        <HomeContainer>
            <SearchInput />
            <DisplayVideo />
        </HomeContainer>
    )
}

export default Home