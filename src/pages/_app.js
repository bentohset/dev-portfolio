import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Layout>
        <Component {...pageProps} />
        <Analytics/>
      </Layout>
    </ThemeProvider>
    
  )
}
