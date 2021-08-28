import styled from '@emotion/styled';
import { Text, useColorModeValue } from '@chakra-ui/react';

const Quote = styled(Text)`
  border-left: 10px solid #208bbd;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  font-style: italic;
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
    font-family: monospace;
    font-size: 1rem;
  }
`;

export default function BlockQuote(props: { children: string }) {
  const primary = useColorModeValue('blogLight.primary', 'blogDark.primary');
  const secondary = useColorModeValue('blogLight.secondary', 'blogDark.secondary');

  return (
    <Text as="blockquote" bg={primary} borderLeft="10px solid" borderColor={secondary}>{props.children}</Text>
  );
}