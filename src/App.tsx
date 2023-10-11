import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { CoffeeContextProvider } from './contexts/CoffeesContext'
import client from './graphql/connection'
import { ApolloProvider } from '@apollo/client'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </BrowserRouter>
      </ApolloProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
