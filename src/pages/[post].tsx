import fs from 'fs';
import path from 'path';
import { ReactNode } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Heading, Text } from '@chakra-ui/layout';


import TestComp from '../components/TestComp';

type PostProps = {
  source: MDXRemoteSerializeResult;
  metaInformation: {
    seoTitle: string
  };
};

const H1 = (props: { children: ReactNode }) => {
  return (
    <Heading as="h1" size="lg">
      {props.children}
    </Heading>
  );
};

const P = (props: { children: ReactNode}) => {
  return (
    <Text as="p" size="md">{props.children}</Text>
  );
};

const components = {
  h1: H1,
  p: P,
  TestComp
};

const Post = (props: PostProps) => {
  return (
    <>
      <div>
        <MDXRemote {...props.source} components={components} />
      </div>
      <div>SEO Information: {JSON.stringify(props.metaInformation)}</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'src/content');
  const params = props.params!.post;
  const filePath = path.join(folderPath, `${params}.mdx`);
  const rawFileSource = fs.readFileSync(filePath);
  const { content, data } = matter(rawFileSource);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      metaInformation: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { post: 'some-random-path' } },
      { params: { post: 'alternative-random-path' } }
    ],
    fallback: false
  };
};

export default Post;

