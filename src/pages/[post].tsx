import { GetStaticPaths, GetStaticProps } from 'next';

const Post = () => {
  return <div>Test</div>;
};

export const getStaticProps: GetStaticProps = async (props) => {
  return { props: {} };
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

