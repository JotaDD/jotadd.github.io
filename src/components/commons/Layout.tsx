import { ReactNode } from 'react';
import Header from './Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
});

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={montserrat.className}>
      <Header/>
      {children}
    </div>
  );
};
export default Layout;