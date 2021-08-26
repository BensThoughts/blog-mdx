import { Flex } from '@chakra-ui/layout';
import { ReactNode } from 'react';

import Header from '../sections/Header';
interface LandingLayoutProps {
  children: ReactNode,
  // nextComponent: ReactNode,
  // pageProps: any
}

export default function LandingLayout(props: LandingLayoutProps) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{'xl': '1200px' }}
      m="0 auto"
      {...props}
    >
      <Header />
      {/* <Component pageProps={...props.pageProps} /> */}
      {props.children}
      {/* <MenuDrawer /> */}
    </Flex>
  );
}