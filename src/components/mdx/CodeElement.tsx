import { Code } from '@chakra-ui/layout';
import { ReactNode } from 'react';

export default function CodeElement(props: { children: ReactNode }) {
  return (
    <Code>
      {props.children}
    </Code>
  );
};