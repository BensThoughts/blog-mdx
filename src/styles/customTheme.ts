import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import theme, { Theme } from '@chakra-ui/theme';
import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    'html, body': {
      fontFamily: 'body',
      fontWeight: 'light',
      color: mode('gray.700', 'whiteAlpha.800')(props),
      bg: mode('orange.100', 'grey.900')(props),
    },
  })
};

const customTheme: Theme = {
  ...theme,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  // shadows: {
  //   xs: 'outline',
  //   sm: 'outline',
  //   base: 'outline',
  //   md: 'outline',
  //   lg: 'outline',
  //   xl: 'outline',
  //   '2xl': 'outline',
  //   outline: 'black',
  //   inner: 'outline',
  //   none: 'outline',
  //   'dark-lg': 'outline',
  // },
  styles
};

const IconButton = {
  
};

const myTheme = extendTheme({
  ...customTheme,
  colors: {
    blogLight: {
      'primary': '#FBD38D', // orange.200
      'secondary': '#ED8936', // orange.400
      'accent': '#FAF089', //  yellow.200
      50: '#000000', 
      100: '#000000', 
      200: '#000000', 
      300: '#000000',
      400: '#000000',
      500: '#ED8936', // BG - accent
      600: '#FAF089', // Hover - secondary
      700: '#FAF089', // Active - accent
      800: '#000000',
      900: '#000000',
    },
    blogDark: {
      'primary': '#4A5568', // gray.600
      'secondary': '#3182CE', // blue.500
      'accent': '#63B3ED', // blue.300
      50: '#000000', 
      100: '#000000', 
      200: '#3182CE', // BG - accent
      300: '#63B3ED', // Hover - secondary
      400: '#63B3ED', // Active - accent
      500: '#000000',
      600: '#000000',
      700: '#000000', 
      800: '#000000',
      900: '#000000',
    }
  }
});

export default myTheme;