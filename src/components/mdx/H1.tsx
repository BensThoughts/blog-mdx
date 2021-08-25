import { Heading } from '@chakra-ui/layout';
import { ReactNode } from 'react';

export default function H1(props: { children: ReactNode }) {
  return (
    <Heading as="h1" size="lg">
      {props.children}
    </Heading>
  );
};