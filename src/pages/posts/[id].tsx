import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';


import TestComp from '../../components/TestComp';

import Date from '../../components/mdx/Date';

import H1 from '../../components/mdx/H1';
import P from '../../components/mdx/P';
import H2 from '../../components/mdx/H2';
import CodeElement from '../../components/mdx/CodeElement';
import BlockQuote from '../../components/mdx/BlockQuote';


import { getAllPostIds, getPostData } from '../../utils/posts';
import { Box, Flex } from '@chakra-ui/react';

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
  TestComp
};

const Post = (props: PostProps) => {
  return (
    <Flex direction="column" align="center">
      <Box>
        <H1>
          {props.metaInformation.title}
        </H1>
        <Date dateString={props.metaInformation.date} />
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