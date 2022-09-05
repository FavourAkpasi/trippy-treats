import React from "react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Loading />
    </>
  );
};

export default Home;
