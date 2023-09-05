import { ReactNode } from "react";

type PopupProps = {
  children: ReactNode;
  isHidden: boolean;
};

const Popup = ({ children, isHidden }: PopupProps) => {
  return (
    <span className={ ` z-10 focus-visible:-rotate-6 text-j-blue-900 rounded-xl px-1.5 text-center relative bottom-8 right-12 text-sm w-fit  ${isHidden ? 'bg-j-blue-900':'bg-white transform animate-bounce-fast '}` }>
      { children }
    </span>
  );
};
export default Popup;