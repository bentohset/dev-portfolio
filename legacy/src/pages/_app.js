import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";

// Extend the default Chakra UI theme
export const customTheme = extendTheme({
  fonts: {
    body: "Consolas, monospace",
    heading: "Consolas, monospace",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
      <ThemeProvider defaultTheme='dark' attribute='class'>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
      </ChakraProvider>
    </>

  )
}
