import { InputContainer , Input , InputButton } from './styles'

function SearchInput () {
    return (
        <InputContainer>
            <Input 
                type="text"
                placeholder='Digite o nome do seu streamer favorito aqui !!'
            />
            <InputButton>Pesquisar</InputButton>
        </InputContainer>
    )
}

export default SearchInput