import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '../utils/posts';
import { ReactNode } from 'react';
import { Box } from '@chakra-ui/layout';

import H2 from '../components/mdx/H2';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

interface HomeProps {
  allPostsData: {
    date: string,
    title: string,
    id: string,
    children?: ReactNode
  }[]
}

export default function Home(props: HomeProps) {
  return (
    <Box>
      <section>
        <H2>Blog</H2>
        <ul>
          {props.allPostsData.map(({ id, title, date}) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Box>
  );
};
