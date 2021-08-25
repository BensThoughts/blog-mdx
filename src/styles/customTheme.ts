import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import theme, { Theme } from '@chakra-ui/theme';
import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    fontFamily: 'body',
    fontWeight: 'light',
    color: mode('gray.100', 'whiteAlpha.900')(props),
    bg: mode('gray.700', 'gray.900')(props)
  })
};

const customTheme: Theme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: `'Source Sans Pro',${theme.fonts.body}`,
    heading: `'Source Sans Pro',${theme.fonts.body}`
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles
};

const myTheme = extendTheme({
  ...customTheme,
  textStyles: {
    h1: {
      fontSize: ['20px', '20px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%'
    }
  }
});

export default myTheme;