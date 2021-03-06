import { Box } from '@chakra-ui/react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from '@emotion/styled';

const Pre = styled(Box)`
  text-align: left;
  overflow-x: auto;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled(Box)`
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface CodeElementProps {
  children: string,
  className: string
}

export default function CodeElement(props: CodeElementProps) {
  const children = props.children;
  const language = props.className.replace('language-', '') as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre
          as="pre"
          style={style}
          className={className}
        >
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo
                as="span"
                display={{ base: 'none', md: 'table-cell' }}
              >{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};