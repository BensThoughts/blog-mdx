import { Heading } from '@chakra-ui/layout';
import { ReactNode } from 'react';

export default function H1(props: { children: ReactNode }) {
  return (
    <Heading as="h2" size="md" m="3">
      {props.children}
    </Heading>
  );
};