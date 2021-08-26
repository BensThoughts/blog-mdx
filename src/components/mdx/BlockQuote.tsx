import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Quote = styled(Text)`
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  font-style: italic;
  ::before {
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
    font-family: monospace;
    font-size: 1rem;
  }
`;

export default function BlockQuote(props: { children: string }) {
  const bg = useColorModeValue('gray.100', 'gray.600');
  return (
    <Quote as="blockquote" bg={bg}>{props.children}</Quote>
  );
}