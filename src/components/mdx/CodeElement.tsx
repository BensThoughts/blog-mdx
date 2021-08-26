import { Box } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from '@emotion/styled';

const Pre = styled(Box)`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
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

export default function CodeElement(props: { children: string }) {
  return (
    <Box padding={3} overflow="auto">
      <Highlight {...defaultProps} code={props.children.trim()} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre
            as="pre"
            w={{
              base:'sm',
              md: '700px'
            }}
            className={className}
            style={style}
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
    </Box>
  );
};