import Head from 'next/head';
import AboutMe from '@/components/Home/AboutMe';
import Projects from '@/components/Home/Projects';
import projects from '@/data/data';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | JotaDD</title>
        <meta name='description'
          content='Oi, eu sou o João' />
      </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-28'>
        <AboutMe />
        <Projects projects={projects}/> 
      </div>
    </>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string; }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
