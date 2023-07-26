import { MenuCloseIcon } from '@/components/icons/MenuCloseIcon';
import Link from 'next/link';

type MenuProps = {
  isVisible: boolean;
  onClose: () => void;
}


const Menu = ({isVisible, onClose}: MenuProps) => {
  return (
    <div className={ `${ isVisible ? 'flex' : 'hidden'}
      fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden
    `}
    onClick={onClose}
    >
      <div className='w-full bg-j-blue-900 h-96 shadow-md py-4 px-5' onClick={(event)=> event.stopPropagation()}>
        <div className='flex justify-between mb-5 '>
          <Link href='/'>Home</Link>
          <button onClick={onClose}>
            <MenuCloseIcon className=' fill-white w-10 h-10'/>
          </button>
        </div>
        <nav className=' flex flex-col gap-5 text-xl p-5 items-center'>
          <Link href='/' onClick={onClose}>Sobre mim</Link>
          <Link href='/contact' onClick={ onClose }>Entre em contato</Link>
        </nav>
      </div>
    </div>
  );
};
export default Menu;