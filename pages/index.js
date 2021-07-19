import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../ui/components/Modules/Hero';
import Logos from '../ui/components/Modules/Logos';
import Header from '../ui/components/Header';
import Headline from '../ui/components/Modules/Headline';
import Carousel from '../ui/components/Modules/Carousel';
import LearnMore from '../ui/components/Modules/LearnMore';
import Footer from '../ui/components/Footer';

export default function Home() {
  return (
    <Box background="brand.100">
      <Head>
        <title>The Wonderful UI / Interaction Developer Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Headline />
        <Carousel />
        <LearnMore />
      </main>
      <Footer />
    </Box>
  );
}
