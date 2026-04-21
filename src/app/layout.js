 
import Link from "next/link";
import './globals.css';


 export const metadata = {
  title: 'GameVault',
  description: 'Your favorite video game catalog'
 };

 export default function RootLayout({ children }) {
  return(
    <html lang='en'>
      <body>
        <nav className='flex gap-4 p-4 bg-gray-900 text-white'>
          <Link href='/' className="hover:text-blue-400"> Home </Link>
          <Link href='/about' className="hover:text-blue-400"> About </Link>
        </nav>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
 }