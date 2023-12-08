import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../i18n'
import React, { Suspense } from 'react'
import Header from '@/components/Header'
import Social from '@/components/Social'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { Analytics } from '@vercel/analytics/react'
import MySection from '@/components/MySection'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <MySection>
          <Header />
          <Component {...pageProps} />
          <Analytics />
          <Social />
        </MySection>
      </Suspense>
    </React.StrictMode>

  </>
}
