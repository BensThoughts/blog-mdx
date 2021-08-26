import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { MutableRefObject, useRef } from 'react';
import MenuItem from './MenuItem';
import menuLinks from './menuLinks';

interface MenuDrawerProps {
  display: {
    base: string,
    md: string,
  },
  mr: number
}

export default function MenuDrawer(props: MenuDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const bg = useColorModeValue('gray.200', 'gray.600');

  return (
    <>
      <IconButton
        display={props.display}
        mr={props.mr}
        aria-label="Menu"
        ref={btnRef}
        onClick={onOpen}
      >
        <HamburgerIcon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody textAlign="center">
            {menuLinks.map((menuLink) => {
              const { path, name } = menuLink;
              return (
                <Box key={path} _hover={{ bg: bg}}>
                  <MenuItem onClick={onClose} to={path}>
                    {name}
                  </MenuItem>
                </Box>
              );
            })}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>  
      </Drawer>
    </>
  );
}