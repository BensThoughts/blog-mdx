import { useState , ReactNode } from 'react';
import Link from 'next/link';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/color-mode';
import Logo from './Logo';


interface MenuItemsProps {
  children: ReactNode,
  isLast?: boolean,
  to: string
}

const MenuItems = (props: MenuItemsProps) => {
  const {children, isLast, to = '/', ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton aria-label="Color Mode" onClick={toggleColorMode}>
      <MoonIcon />
      {/* Toggle {colorMode === 'light' ? 'Dark' : 'Light'} */}
    </IconButton>
  );
};


const Header = (props: any) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={{
        base: 'blackAlpha.200',
      }}
      color={{
        base: 'primary.700'
      }}
      {...props}
    >
      <Flex align="center">
        <Logo></Logo>
      </Flex>

      <Box display={{ base: 'block', md: 'none'}} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/blog">Blog</MenuItems>
          <MenuItems to="/about">About</MenuItems>
          <MenuItems to="/projects" isLast>Project</MenuItems>
          <DarkModeButton />
          {/* <Button
            size="sm"
            rounded="md"
            color={['primary.500', 'primary.500', 'white', 'white']}
            bg={['white', 'white', 'primary.500', 'primary.500']}
            _hover={{
              bg: [
                'primary.100',
                'primary.100',
                'primary.600',
                'primary.600'
              ]
            }}
          >
            Create Account
          </Button> */}


        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;