import { Heading } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import styled from '@emotion/styled';

// const Test = styled(Heading)`
//   font-family: 'Press Start 2P', cursive;
// `;

export default function H1(props: { children: ReactNode }) {
  return (
    <h1 className="font-sans font-bold md:font-press-start md:text-lg text-2xl">
      {props.children}
    </h1>
  );
};