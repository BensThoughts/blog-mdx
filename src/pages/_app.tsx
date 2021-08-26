// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/customTheme';
import Header from '../components/sections/Header';
import LandingLayout from '../components/layouts/LandingLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <LandingLayout>

        <Component {...pageProps} />
      </LandingLayout>
    </ChakraProvider>
  );
}
export default MyApp;
