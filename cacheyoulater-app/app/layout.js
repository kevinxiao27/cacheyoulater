/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <main className='p-0 bg-white'>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
            <Link href="/dash">
              Dash
            </Link>
            <Link href="/login">
              Login
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}