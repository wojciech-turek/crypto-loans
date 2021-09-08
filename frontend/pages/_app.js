import "normalize.css";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import "../styles/GlobalStyles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
