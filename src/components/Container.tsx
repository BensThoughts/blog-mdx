import Head from 'next/head';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const LayoutDiv = styled.div`
  color: #fff;
  font-family: Lato;
`;

interface ContainerProps {
  children: ReactNode,
  title: string
}

const Container = (props: ContainerProps) => {
  return (
    <LayoutDiv>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.children}
    </LayoutDiv>
  );
};

export default Container;
