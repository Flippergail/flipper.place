import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="w-full h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kalam&display=swap" rel="stylesheet"/>
      </head>
      <Head />
      <body className="w-full h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
