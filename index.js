import React from "react";
import Footer from "../components/Footer";
import LatestArticle from "../components/LatestArticles";
import NavBar from "../components/NavBar";

const index = () => {
  return (
    <>
      <NavBar />
      <LatestArticle />
      <Footer />
    </>
  );
};

export default index;
