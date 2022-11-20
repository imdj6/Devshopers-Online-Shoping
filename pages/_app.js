import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NavBar2 from '../components/NavBar2'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
  <hr/>
  <NavBar2/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
