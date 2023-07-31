import Navbar from '@/src/components/navbar/Navbar'
import '@/styles/globals.css'
// import 'bootstrap/dist/js/bootstrap.min.js';


export default function App({ Component, pageProps }) {
  return (
    <div>
      <div
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Navbar />
      </div>
      <Component {...pageProps} />



    </div>

  )
}
