import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/f097795f52.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  );
};

const InvisibleStaticDiv = () => {
  return <div style={{ minHeight: 115, width: "100%" }}></div>;
};

export default function Layout({ children, title }) {
  return (
    <React.Fragment>
      <Head title={title} />
      <Header />
      <InvisibleStaticDiv />
      {children}
      <Footer />
    </React.Fragment>
  );
}
