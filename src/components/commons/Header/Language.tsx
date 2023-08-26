import brFlag from '../../../../public/bandeira-do-brasil.png';
import usFlag from '../../../../public/united-states.png';
// import brFlag from '../../../../public/br.svg'
// import usFlag from '../../../../public/us.svg'
import Image from 'next/image';
import Button from '../Button/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Language = () => {
  const { locale, locales, push } = useRouter();
  return (
    <div>
      { locales?.map((localeItem) => (
        <h4 key={ localeItem }>
          <Link href={ "/" }
            locale={ localeItem }
          >
            { localeItem }
          </Link>
        </h4>))
      }
    </div>
  );




  //     {/* <Button */ }
  //     {/* // className=' flex w-[2.5rem]  justify-between '
  //       // > */}
  //     {/* //   <Image unoptimized src={ brFlag } alt='Brasil' width={ '18' }
  //     // // className='mr-3 '
  //     // /> */}
  //     {/* <Image unoptimized src={ usFlag } alt='USA' width={ '18' } /> */ }
  //     {/* </Button > */ }
  // );
};
export default Language;