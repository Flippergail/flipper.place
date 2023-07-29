import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="w-full h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>
      <body className="w-full h-full" data-hijacking="on" data-animation="scaleDown">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
