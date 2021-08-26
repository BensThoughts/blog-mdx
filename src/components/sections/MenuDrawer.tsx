import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { MutableRefObject, useRef } from 'react';
import MenuItem from './MenuItem';

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
          <DrawerBody>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/blog">Blog</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/project">Projects</MenuItem>
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