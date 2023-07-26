import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | JotaDD</title>
      </Head>
      <div>
        <h1>Sobre Mim</h1>
        <Link href='/'>Ir para a Página Inicial</Link>
      </div>
    </>
  );
};
export default About;