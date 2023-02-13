import React from "react";
import Favorites from "../../components/Favorites/Favorites";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Favorites />
      <Loading />
      <Footer />
    </>
  );
};

export default Home;
