import '@/styles/globals.css'
import Script from "next/script";
import Nav from './nav'

export default function App({ Component, pageProps }) {
  return <>
 { /*<Script id="Adsense-id" 
  crossorigin="anonymous"
  async strategy="afterInteractive"
  onError={ (e) => { console.error('Script failed to load', e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8097535607316189"
/>*/} 
  <Nav/><Component {...pageProps} /></>
}
