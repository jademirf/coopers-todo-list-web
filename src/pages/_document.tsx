import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return(
    <Html>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <body className="text-black">
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}