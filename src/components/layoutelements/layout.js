import React from "react";
import Footer from "./footer";
import Header from "./header";
import {Helmet} from "react-helmet";

const Head = ({title}) => {
 return (
  <Helmet>
   <meta charSet='utf-8' />
   <title>{title}</title>
   <meta
    http-equiv='Content-Security-Policy'
    content='upgrade-insecure-requests'
   />
   <link rel='preconnect' href='https://fonts.googleapis.com' />
   <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
   <link
    href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap'
    rel='stylesheet'
   />
   <link rel='preconnect' href='https://fonts.googleapis.com' />
   <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
   <link
    href='https://fonts.googleapis.com/css2?family=Karla&family=Noto+Serif+Display:wght@300;500&display=swap'
    rel='stylesheet'
   />
   <link rel='preconnect' href='https://fonts.googleapis.com' />
   <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
   <link rel='preconnect' href='https://fonts.googleapis.com' />
   <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
   <link
    href='https://fonts.googleapis.com/css2?family=Karla&family=Noto+Serif+Display:wght@300;500&family=Raleway&display=swap'
    rel='stylesheet'
   />
   <link
    href='https://fonts.googleapis.com/css2?family=Karla&family=Noto+Serif+Display:wght@300;500&family=Raleway:wght@300&display=swap'
    rel='stylesheet'
   />
   <script
    src='https://kit.fontawesome.com/f097795f52.js'
    crossorigin='anonymous'
   ></script>
  </Helmet>
 );
};

export default function Layout({children, title}) {
 return (
  <React.Fragment>
   <Head title={title} />
   <Header />
   {children}
   <Footer />
  </React.Fragment>
 );
}
