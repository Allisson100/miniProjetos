import { Header , UlList , ListItem ,Logo } from './styles'

function Navbar() {
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
        </Header>
    )
}

export default Navbar