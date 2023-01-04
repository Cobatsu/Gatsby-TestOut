import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const BlackCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999999999999;
`;

const Content = styled.div`
  background: white;
  width: 50rem;
  height: 35rem;
  margin: auto;
  border-radius: 7px;
  margin-top: 9%;
  padding: 1rem;
`;

const Head = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>

      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&family=Noto+Serif+Display:wght@300;500&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&family=Noto+Serif+Display:wght@300;500&family=Raleway&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&family=Noto+Serif+Display:wght@300;500&family=Raleway:wght@300&display=swap"
        rel="stylesheet"
      />
      <script
        src="//code.tidio.co/skp4rn7isxzvitydfwmr9vvksmffuukw.js"
        async
      ></script>
      <script
        src="https://kit.fontawesome.com/be8853b629.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  );
};

export default function Layout({ children, title }) {
  return (
    <React.Fragment>
      <Head title={title} />
      {/* <BlackCover>
        <Content>
          <i
            class="fas fa-times"
            style={{ color: "#191970", fontSize: 18, cursor: "pointer" }}
          ></i>
        </Content>
      </BlackCover> */}
      <Header />
      <div style={{ minHeight: 400 }}>{children}</div>

      <Footer />
    </React.Fragment>
  );
}
