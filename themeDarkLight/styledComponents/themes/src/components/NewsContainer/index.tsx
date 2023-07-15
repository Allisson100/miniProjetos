import { Container , Title , Image , P , UlList} from './styles'

function NewsContainer () {
    return (
        <Container>
            <Title>Call of Duty: skin de MW2 e Warzone 2 está gerando polêmica; entenda</Title>
            <Image src="https://tm.ibxk.com.br/2022/12/02/02115708490124.jpg?ims=704x264" alt="" />
            <P>
                Uma nova skin disponibilizada em Call of Duty: Modern Warfare 2 e Warzone 2.0 vem dividindo opiniões dentro da comunidade dos games. O motivo? Ela supostamente estaria dando vantagens competitivas 'injustas' para seus compradores.
            </P>
            <P>
                O bundle baseado no Los Angeles Thieves, que faz parte de 12 outros pacotes lançados pela Call of Duty League, pode ser comprado por 9 euros (no Brasil, sai por R$ 52 pela Steam).  Nele, o jogador ou jogadora tem os seguintes benefícios:
            </P>
            <UlList>
                <li>Skin Masculina e Skin Feminina de Operador Em Casa e Fora</li>
                <li>Camuflagem de Arma</li>
                <li>Adesivo de Vinil</li>
                <li>Cartão de Visitas Animado</li>
                <li>Emblema</li>
                <li>Adesivo de Arma</li>
            </UlList>                
            <P>
                A princípio, não há nada errado na lista, mas a comunidade vem alegando que o tom excessivamente escuro da skin torna praticamente impossível visualizar o inimigo em determinadas condições no mapa.
            </P>
        </Container>
    )
}

export default NewsContainer