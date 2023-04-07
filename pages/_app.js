import '../styles/globals.css'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function App({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
    <AnimatedCursor/>
  </>)
}
