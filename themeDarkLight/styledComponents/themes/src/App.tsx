import Home from './pages/home'
import GlobalStyles from './styles/global'

import { ThemeProvider , DefaultTheme } from 'styled-components'
import theme from './styles/theme'


function App() {

  const newTheme: DefaultTheme = theme.light

  return (

    <ThemeProvider theme={newTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
