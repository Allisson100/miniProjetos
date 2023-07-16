import Home from './pages/Home'
import GlobalStyles from './styles/global'

import theme from './styles/theme'
import { ThemeProvider , DefaultTheme } from 'styled-components'

function App() {

  const wTheme: DefaultTheme = theme.dark

  return (
    <ThemeProvider theme={wTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
