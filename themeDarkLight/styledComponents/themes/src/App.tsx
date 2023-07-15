import Home from './pages/home'
import GlobalStyles from './styles/global'

import { ThemeProvider , DefaultTheme } from 'styled-components'
import theme from './styles/theme'

import {useSwitchState} from './services/store/useSwitchState'


function App() {

  const { switchState } = useSwitchState()

  const wTheme = switchState ? 'dark' : 'light'
  
  const newTheme: DefaultTheme = theme[wTheme]

  return (

    <ThemeProvider theme={newTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
