import { GetStaticPaths, GetStaticProps } from 'next';
import { parseISO, format } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';


import TestComp from '../../components/TestComp';

import Date from '../../components/Date';

import H1 from '../../components/mdx/H1';
import P from '../../components/mdx/P';
import H2 from '../../components/mdx/H2';
import CodeElement from '../../components/mdx/CodeElement';
import { getAllPostIds, getPostData } from '../../utils/posts';

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
  h1: H1,
  h2: H2,
  p: P,
  code: CodeElement,
  TestComp
};

const Post = (props: PostProps) => {
  return (
    <>
      <div>
        <H1>
          {props.metaInformation.title}
        </H1>
        <Date dateString={props.metaInformation.date} />
        <MDXRemote {...props.source} components={components} />
      </div>
      <div>SEO Information: {JSON.stringify(props.metaInformation)}</div>
    </>
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
  // const folderPath = path.join(process.cwd(), 'src/content');
  // const params = props.params!.post;
  // const filePath = path.join(folderPath, `${params}.mdx`);
  // const rawFileSource = fs.readFileSync(filePath);
  // const { content, data } = matter(rawFileSource);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      metaInformation: data
    }
  };
};

export default Post;