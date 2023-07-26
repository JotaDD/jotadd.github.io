import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import Menu from './Menu';
import { useCallback, useState } from 'react';
import { MenuIcon } from '@/components/icons/MenuIcon';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const closeMenu = useCallback(()=> {
    setIsMenuOpen(false);
  },[]);
  return (
    <header className={ `${ montserrat.className} bg-j-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
      <Link href='/'>Home</Link>
      <button className='p-1 md:hidden' onClick={openMenu}>
        <MenuIcon className='fill-white w-10 h-10 '/>
      </button>
      <nav className='hidden md:flex items-center gap-10 text-md '>
        <Link href='/'>Sobre mim</Link>
        <Link href='/contact'>Entre em contato</Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
    </header>
  );
};
export default Header;