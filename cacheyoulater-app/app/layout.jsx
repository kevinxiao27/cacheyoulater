/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <main className='p-0 bg-white'>
          {children}
        </main>
      </body>
    </html>
  );
}