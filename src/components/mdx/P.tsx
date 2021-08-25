import { ReactNode } from 'react';
import { Text } from '@chakra-ui/layout';
import { css } from '@emotion/react';

const PCss = css`
  margin: 20px;
`;

export default function P(props: { children: ReactNode}) {
  return (
    <Text css={PCss} as="p" size="md">{props.children}</Text>
  );
};