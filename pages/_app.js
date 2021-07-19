import theme from '/ui/theme';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import GlobalStyle from '/ui/theme/Global';
import '../ui/components/Modules/Carousel/Carousel.css';

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
