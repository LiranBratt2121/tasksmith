import { Heebo } from 'next/font/google';

const heebo = Heebo({
  weight: '500',
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={heebo.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
