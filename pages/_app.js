import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/Theme';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
