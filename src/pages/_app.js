import "@/styles/globals.css";
import Layout from "@/components/layout";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import TransitionEffect3 from "@/components/TransitionEffect3";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <TransitionEffect3>
          <Component {...pageProps} />
        </TransitionEffect3>
      </Layout>
    </div>
  );
}
