import CarContextWrapper from 'context/CarContext';
import NavContextWrapper from 'context/NavContext';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/Theme';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavContextWrapper>
        <CarContextWrapper>
          <GlobalStyle />
          <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CarContextWrapper>
      </NavContextWrapper>
    </>
  );
}

export default MyApp;
