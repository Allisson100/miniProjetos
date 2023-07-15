# Tipagem de Props no styled components

    interface Props {
        theme: {
            colors: {
                mainColor: string;
                secundaryColor: string;
                textColor: string;
            }
        }
    }

    export const Header = styled.header<Props> `
        width: 100%;
        height: 100px;

        background-color: ${({ theme }: Props) => (theme.colors.mainColor)};
        color: black;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0rem 3rem;
    `

Tem que pegar o objeto que vem das props corretamente e tipar conforme o que vem das props.

# Explicação da transição entre tema dark e light

    import {create} from 'zustand';

    type MySate = {
        switchState: boolean;
        setSwitchState: (value: boolean) => void;
    }

    const useSwitchState = create<MySate>((set) => ({
        switchState: false,
        setSwitchState: (value: boolean) => set(() => ({ switchState: value })),
    }));

    export {useSwitchState};

Criei uma variável de estado global aqui com Zustand, essa variável é responsável por saberse o switch está ligando ou desligado. Ligado é tema dark, desligado é tema Light.

    import { Header , UlList , ListItem ,Logo } from './styles'
    import { useState } from 'react'

    import Switch from 'react-switch'

    import {useSwitchState} from '../../services/store/useSwitchState'

    function Navbar() {

        const { switchState } = useSwitchState()
        const { setSwitchState } = useSwitchState();

        const [checked , setChecked] = useState(switchState)

        function handleSwitchChange () {
            setChecked(!checked)
            setSwitchState(!checked)
        }


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
            </Header>
        )
    }

    export default Navbar

Eu utilizo esse Switch no HEader né, na parte do menu. Esse Switch é importado da biblioteca do react-switch e ele tem algumas funções.

Eu preciso setar nele um valor true ou false com o checked={} e nele eu passei a variável de estado checked que por padrão é falsa. A função onChange={handleSwitchChange}, basicamente toda vez que tem uma alteração no switch ele chama essa função e essa função diz para o estado que o botão está true ou false (ativado ou desativado), e também setamos isso na variável global, pois é lá que definimos se o tema é dark(ture) ou light(false).
