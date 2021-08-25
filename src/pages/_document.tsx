import { ColorModeScript } from '@chakra-ui/color-mode';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/customTheme';
import Script from 'next/script';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script type="text/javascript" src="https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js">
          </Script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}