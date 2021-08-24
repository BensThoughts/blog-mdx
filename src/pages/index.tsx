import type { NextPage } from 'next';
import Header from '../components/Header';
import Container from '../components/Layout';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Container title="Bens Thoughts">
      <Header />
    </Container>
  );
};

export default Home;
