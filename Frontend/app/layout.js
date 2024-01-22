import { Inter } from 'next/font/google';
import styles from './globals.css';
import Side from './components/side/page';
import Navbar from './components/navbar/page';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 max-sm:w-auto bg-gray-100 ">
        {/* Sidebar content goes here */}
        <Side/>
      </div>
      <div className="flex-1 w-full ">
        {/* Content goes here */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
