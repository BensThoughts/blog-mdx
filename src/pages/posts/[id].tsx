import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';


import TestComp from '../../components/TestComp';

import {
  H1,
  H2,
  P,
  CodeElement,
  BlockQuote,
  CommandLine,
  Date
} from '@app/components/mdx';


import { getAllPostIds, getPostData } from '../../utils/posts';
import { Box, Flex, Text } from '@chakra-ui/react';

type PostProps = {
  source: MDXRemoteSerializeResult;
  metaInformation: {
    title: string,
    date: string,
    readTime: number,
    tags: string[]
  };
};


const components = {
  blockquote: BlockQuote,
  h1: H1,
  h2: H2,
  p: P,
  code: CodeElement,
  TestComp,
  CommandLine
};

const Post = (props: PostProps) => {
  return (
    <Flex direction="column" align="center">
      <Box>
        <H1>
          {props.metaInformation.title}
        </H1>
        <Flex direction="row" justify="space-between">
          <Date dateString={props.metaInformation.date} />
          <Text as="i">
            Read time: {props.metaInformation.readTime} min.
          </Text>
        </Flex>
      </Box>
      <MDXRemote {...props.source} components={components} />
    </Flex>
  );
};



export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = await getPostData(params!.id as string);
  const mdxSource = await serialize(content,{
    mdxOptions: {
      rehypePlugins: [
        require('rehype-code-title')
      ]
    }
  });

  return {
    props: {
      source: mdxSource,
      metaInformation: data
    }
  };
};

export default Post;