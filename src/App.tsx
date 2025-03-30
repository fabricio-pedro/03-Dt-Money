
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
     <StyleSheetManager shouldForwardProp={isPropValid}>
      <Transactions/>
      </StyleSheetManager>
    </ThemeProvider>
  )
}

