import brFlag from '../../../../public/bandeira-do-brasil.png';
import usFlag from '../../../../public/united-states.png';
// import brFlag from '../../../../public/br.svg'
// import usFlag from '../../../../public/us.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

type LanguageProps = {
  width?: number;
} & HTMLAttributes<HTMLDivElement>;

const Language = ({ width = 18, className='' }: LanguageProps) => {
  const { locales } = useRouter();
  return (
    <div className={ ` flex w-[2.8rem] justify-between ${ className}`  }>
      { locales?.map((localeItem) => (
        <Link href={ "/" } locale={ localeItem } key={ localeItem } >
          { localeItem === 'pt-BR'
            ? (<Image unoptimized src={ brFlag } alt='Brasil' width={ width } />)
            : (<Image unoptimized src={ usFlag } alt='USA' width={ width } />) }
        </Link>
      )) }
    </div>
  );


  // <Link href={"/"} locale={locale}>
  // { locale === 'en-US' ? (<Image unoptimized src={ brFlag } alt='Brasil' width={ '20' } />) : (<Image unoptimized src={ usFlag } alt='USA' width={ '20' } /> )}
  // </Link>
  /* // { locales?.map((localeItem) => (
      //   <h4 key={ localeItem }>
      //     <Link href={ "/" }
      //       locale={ localeItem }
      //     >
      //       { localeItem }
      //     </Link>
      //   </h4>))
      //   } */




  //     {/* <Button */ }
  //     {/* // className=' flex w-[2.5rem]  justify-between '
  //       // > */}
  //     {/* //   <Image unoptimized src={ brFlag } alt='Brasil' width={ '18' }
  //     // // className='mr-3 '
  //     // /> */}
  //     {/* <Image unoptimized src={ usFlag } alt='USA' width={ '18' } /> */ } */ }
  //     {/* </Button > */ }
  // );
};
export default Language;