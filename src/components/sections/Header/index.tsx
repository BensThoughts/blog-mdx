import {
  Box,
  Button,
  Flex,
  IconButton,
  useColorModeValue,
  forwardRef,
  FlexProps
} from '@chakra-ui/react';
import { MoonIcon, SearchIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';
import Logo from '@app/components/sections/Logo';

import MenuDrawer from '@app/components/sections/MenuDrawer';
import MenuItem from '@app/components/sections/MenuItem';

import styled from '@emotion/styled';

const IconButton1 = styled(IconButton)`
  
`;


const DarkModeButton = ({ mx }: { mx: string }) => {
  const accent = useColorModeValue('blogLight.accent', 'blogDark.accent');
  const primary = useColorModeValue('blogLight.primary', 'blogDark.primary');
  // TODO: Add colorMode back to useColorMode();
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <IconButton mx={mx} colorScheme={colorMode === 'light' ? 'blogLight' : 'blogDark'} aria-label="Color Mode" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <MoonIcon />}
      {/* Toggle {colorMode === 'light' ? 'Dark' : 'Light'} */}
    </IconButton>
  );
};


const Header = forwardRef<FlexProps, 'div'>((props, ref ) => {
  const primary = useColorModeValue('blogLight.primary', 'blogDark.primary');
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
      bg={primary}
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
          bg={primary}
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