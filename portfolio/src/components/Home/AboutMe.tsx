import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500','700'],
});

const AboutMe = () => {
  return (
    <main className={ ` ${ montserrat.className}  xl:mx-[10rem] flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between `} >
      <div className=' text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120 '>
        <h1 className=' text-3xl sm:text-7xl xl:leading-[5rem]'>Oi, eu sou o&nbsp;
          <strong className=' font-bold '>João&nbsp;</strong>
          <p className=' text-2xl'>(ou Jota se preferir)</p>
        </h1>
        <div className='  xl:w-[25rem] mb-12'>
          <h2 className=' mb-12 '>
            Sou desenvolvedor Front-end e entusiasta em Back-end nas horas vagas!
          </h2>
          <Link className=' p-3 bg-j-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80 ' href='/contact'>Converse comigo!</Link>
        </div>
        <ul className=' flex flex-wrap justify-start  xl:grid  xl:w-full  gap-3 text-xl ' >
          <li
            style={ { backgroundColor: '#2F74C0', color: '#FFFFFF' } }
            className=' w-fill p-2 rounded-md xl:col-start-1 xl:col-end-4 text-center'>typescript</li>
          <li
            style={ { backgroundColor: '#6BDDFA', color: '#000000' } }
            className=' w-fit p-2 rounded-md ' >react.js</li>
          <li
            style={ { backgroundColor: '#000000', color: '#FFFFFF' } }
            className=' w-fit p-2 rounded-md '>next.js</li>
          <li
            style={ { backgroundColor: '#6DA55F', color: '#FFFF' } }
            className=' w-fit p-2 rounded-md '>node.js</li>
        </ul>
      </div>
    
      <div className=''>
        <Image src="https://avatars.githubusercontent.com/u/67765501?v=4"
          unoptimized
          width={500} 
          height={500} 
          alt="Minha foto"
          className='rounded-full'
        />

      </div>
    </main>
  );
};
export default AboutMe;