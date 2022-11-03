import CarContextWrapper from 'context/CarContext';
import NavContextWrapper from 'context/NavContext';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { DEFAULT_SEO } from 'constants/defaultSEO';

import SEO from 'components/common/SEO';

import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/Theme';
import isEmptyObj from 'utils/isEmptyObj';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>알티모빌리티</title>
        <meta name="description" content="알티모빌리티" />
        <link rel="icon" href="/알티모빌리티.jpeg" />
      </Head>

      {isEmptyObj(pageProps) ? (
        <DefaultSeo {...DEFAULT_SEO} />
      ) : (
        <SEO data={pageProps} />
      )}

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
