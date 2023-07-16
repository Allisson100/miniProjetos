import { useState } from 'react'
import ContextProvider from './contexts/index'
import Home from './pages/Home'
import GlobalStyles from './styles/global'

import theme from './styles/theme'
import { ThemeProvider , DefaultTheme } from 'styled-components'



function App() {

  const [switchSate , setSwitchSate] = useState(true)

  function getSwitchState(value: boolean) {

    setSwitchSate(value)
  }

  const wTheme = switchSate ? 'dark' : 'light'

  console.log(wTheme);
  

  const newTheme: DefaultTheme = theme[wTheme]

  return (
    <ThemeProvider theme={newTheme}>
      <ContextProvider>
        <GlobalStyles />
        <Home getSwitchState={getSwitchState}/>
      </ContextProvider>
    </ThemeProvider>
  )
}

export default App
