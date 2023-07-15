import { FooterContainer , SocialMediaContainer , Logo , P , Span} from './styles'

function Footer () {
    return(
        <FooterContainer>
            <Logo>Logo</Logo>
            <P>Todos os direitos reservados</P>
            <SocialMediaContainer>
                <Span>IconF</Span>
                <Span>IconI</Span>
                <Span>IconT</Span>
            </SocialMediaContainer>
        </FooterContainer>
    )
}

export default Footer