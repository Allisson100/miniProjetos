import { Header , UlList , ListItem } from './styles'

const Navbar: React.FC = () => {
    return (
        <Header>
            <h1>LOGO</h1>
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