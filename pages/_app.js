import TopNav from '../components/TopNav'
import "antd/dist/reset.css";
import "../public/css/style.css"
import Footerb from '../components/Footerb';
import { AOSInit } from './aos'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Provider} from '../context'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider} from "next-themes"

export const metadata = {
    title: 'CodeMint | The Group of Website Developers',
    description: 'The Company nhi Khoka ha pyar ik dokha ha tu aarz kiya hai '
  }
  export default function App({
    Component,
    pageProps: { session, ...pageProps },
  }) {
    return (
   

    <>
     <ThemeProvider attribute="class">
      <SessionProvider session={session}>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
  
        
        <div id="buttonDiv"></div> 
        <div id="g_id_onload"
              data-client_id="727447270720-9onpeh709cm86js79ho9lnt5f783m58i.apps.googleusercontent.com"
              data-auto_select="true"
              data-login_uri="https://localhost:3000">
        </div>
          <Provider>
            {/* toastify on form submit */}
          <ToastContainer position='top-right' theme={"dark" ? "dark" :"light"} />
            <AOSInit />  
              <TopNav data-aos="fade"/>
              <Component {...pageProps} />
              <Footerb />
              </Provider>
      </SessionProvider>
    </ThemeProvider>
    </>
  )
}
