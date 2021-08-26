import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  forwardRef,
  FlexProps
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';
import Logo from './Logo';

import MenuDrawer from './MenuDrawer';
import MenuItem from './MenuItem';


const DarkModeButton = ({ mx }: { mx: string }) => {
  // TODO: Add colorMode back to useColorMode();
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton mx={mx}  aria-label="Color Mode" onClick={toggleColorMode}>
      <MoonIcon />
      {/* Toggle {colorMode === 'light' ? 'Dark' : 'Light'} */}
    </IconButton>
  );
};


const Header = forwardRef<FlexProps, 'div'>((props, ref ) => {
  const bg = useColorModeValue('gray.100', 'gray.600');
  const color = useColorModeValue('gray.600', 'gray.100');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h={{
        base: '54px',
        md: '72px'
      }}
      mb={8}
      p={0}
      bg={bg}
      color={color}
      position="sticky"
      top="0"
      {...props}
      ref={ref}
    >
      <Flex ml="3" align="center">
        <Logo></Logo>
      </Flex>

      <MenuDrawer display={{ base: 'block', md: 'none'}} mr={2} />

      <Box
        display={{ base: 'none', md: 'block' }}
      >
        <Flex
          align={{
            base: 'center'
          }}
          justify={{
            base: 'center',
            sm: 'center',
            md: 'flex-end'
          }}
          alignContent="space-between"
          direction={{
            base: 'column',
            md: 'row'
          }}
          pt={[4, 4, 0, 0]}
          bg={bg}
          color={color}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/blog">Blog</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/projects">Project</MenuItem>
          <DarkModeButton mx="3" />
        </Flex>
      </Box>
    </Flex>
  );
});

export default Header;