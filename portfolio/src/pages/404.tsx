import Link from 'next/link';
import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | JotaDD</title>
      </Head>
      <div className=' flex flex-col text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32 items-center '>
        <h1 className=' text-5xl sm:text-7xl font-bold'>404</h1>
        <p className='flex flex-col gap-8 md:text-xl'>
          <span>
            Oops, não conseguimos encontrar essa pasta
          </span>
          <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>     
        </p>
        <Link href='/' className='p-4 bg-j-blue-500 rounded-xl text-black mt-5 md:mt-12 md:text-xl w-fit '>Ir para página Inicial</Link>  
      </div>
    </>
  );
};
export default NotFound;