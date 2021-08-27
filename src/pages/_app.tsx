import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/customTheme';
import Header from '../components/sections/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

library.add(faCopy);  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
