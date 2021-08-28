import { ReactNode } from 'react';
import { Text } from '@chakra-ui/layout';

// const Test = styled(Heading)`
//   font-family: 'Press Start 2P', cursive;
// `;

export default function H1(props: { children: ReactNode }) {
  return (
    <Text as="h1" className="">
      {props.children}
    </Text>
  );
};