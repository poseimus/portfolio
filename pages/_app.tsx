import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../i18n'
import React, { Suspense } from 'react'
import Header from '@/components/Header'
import Social from '@/components/Social'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="min-h-screen bg-neutral-200 dark:bg-[#343541] relative">
          <div className='mx-auto text-black dark:text-white'>
            <Header />
            <Component {...pageProps} />
            <Social />
          </div>
          <div className="overlay-bg opacity-40 dark:opacity-60 absolute h-full w-full top-0"></div>
        </section>
      </Suspense>
    </React.StrictMode>

  </>
}
