
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
