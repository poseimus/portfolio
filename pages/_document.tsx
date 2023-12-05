import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <title>Ahmet Emir Akyuz</title>
      <meta name="description" content="Ahmet Emir Akyuz's portfolio/cw page." />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
