import Popup from '@/components/toast/Popup';
import { CopyIcon } from '../../icons/CopyIcon';
import { useState } from 'react';

type CopyButtonProps = {
  textToCopy: string,
  children: React.ReactNode;
};

const CopyButton = ({ textToCopy, children }: CopyButtonProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsHidden(false);
    setTimeout(() => {
      setIsHidden(true);
    }, 750);
  };
  return (
    <>
      <button onClick={ handleCopy } className=' flex flex-row-reverse items-center justify-center '>
        <CopyIcon title='Clique aqui para copiar' className='fill-white' />
      </button>
      <Popup isHidden={ isHidden }>{ children }</Popup>
    </>
  );
};
export default CopyButton;