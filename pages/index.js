import Head from "next/head";
import Hero from "./Sections/Hero";
import Guide from "./Sections/Guide";
import TrustPage from "./Sections/TrustPage";
import { Messenger } from "../components/Messenger";

const Index = () => {
    
   
   return (
    <div className="selection:bg-green-500">
        <Head>
        <link rel="icon" href="/favicon.ico"  sizes="any" />
            <title>CodeMint | The Group of Website Developers</title>
        </Head>
        {/* Continue with google */}
        <div id="g_id_onload"
            data-client_id="938178728873-ngpq3jer8ue8ejca9hiq7vvonlhiraqg.apps.googleusercontent.com"
            data-context="signin"
            data-login_uri="http://localhost:3000/"
            data-auto_select="true"
            data-itp_support="true">
        </div>
        <script src="https://accounts.google.com/gsi/client" async defer>

        </script>
        <div>
            <Hero/>
            <Guide/>
            <TrustPage/>
            <Messenger />
        </div>

    </div>
   )
}

export default Index;