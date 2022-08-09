import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Home } from './page/Home';
import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
