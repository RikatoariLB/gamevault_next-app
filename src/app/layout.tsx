 
import Link from "next/link";
import './globals.css';
import { cookies } from "next/headers";
import Nav from "../components/Nav";

 export const metadata = {
  title: 'GameVault',
  description: 'Your favorite video game catalog'
 };

 export default async function RootLayout({ children } : { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const isLoggedIn = !!token;

  return(
    <html lang='en'>
      <body>
        <Nav isLoggedIn={isLoggedIn}/>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
 }