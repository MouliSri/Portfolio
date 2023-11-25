import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Bebas+Neue&family=Poppins:ital,wght@0,300;0,400;1,100;1,200;1,400;1,500;1,600;1,700&family=Syncopate:wght@700&display=swap"
            rel="stylesheet"
          />
      </Head>
      
      <body className='dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
