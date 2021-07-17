import theme from '/ui/theme';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import GlobalStyle from '/ui/theme/Global';

const myTheme = extendTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
