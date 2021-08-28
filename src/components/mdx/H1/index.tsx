import { Heading, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

// const Test = styled(Heading)`
//   font-family: 'Press Start 2P', cursive;
// `;

export default function H1(props: { children: ReactNode }) {
  const color = useColorModeValue('blogLight.primary', 'blogDark.primary');
  return (
    <Heading>
      {props.children}
    </Heading>
  );
};