import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BaseLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default BaseLayout;
