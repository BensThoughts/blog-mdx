import { ReactNode } from 'react';
import { Text } from '@chakra-ui/layout';
import { css } from '@emotion/react';


export default function P(props: { children: ReactNode}) {
  return (
    <Text m="20px" as="p" size="md">{props.children}</Text>
  );
};