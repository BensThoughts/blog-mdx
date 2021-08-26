import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Quote = styled(Box)`
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\\201C""\\201D""\\2018""\\2019";
  ::before {
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
  }
`;

export default function BlockQuote(props: { children: string }) {
  const bg = useColorModeValue('gray.100', 'gray.600');
  return (
    <Quote as="blockquote" bg={bg}>{props.children}</Quote>
  );
}