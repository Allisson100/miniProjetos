import Home from './pages/home'
import GlobalStyles from './styles/global'

import { ThemeProvider , DefaultTheme } from 'styled-components'
import theme from './styles/theme'


function App() {

  const wTheme = 'light'
  const newTheme: DefaultTheme = theme[wTheme]

  return (

    <ThemeProvider theme={newTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
