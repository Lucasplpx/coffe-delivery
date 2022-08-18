import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/useCart';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
