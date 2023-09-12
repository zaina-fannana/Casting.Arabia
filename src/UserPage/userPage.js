import React, { Fragment } from "react";
import HeaderUser from "./Header/HeaderUser";
import Footer from "../UI/Footer/Footer";

function UserPage({ children }) {
  return (
    <Fragment>
      <HeaderUser />
      {children}
      <Footer />
    </Fragment>
  );
}

export default UserPage;
