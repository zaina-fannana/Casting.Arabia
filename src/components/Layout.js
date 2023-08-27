import React, { Fragment } from "react";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
