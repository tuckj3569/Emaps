import React from "react";
import HomeGrid from "../components/HomeGrid.js";
import Footer from "../components/Footer.js";
import NavBar from "../components/NavBar";
function Home(props) {
  return (
    <div>
      <NavBar page="home" isLoggedIn={props.isLoggedIn} />
      <HomeGrid isLoggedIn={props.isLoggedIn} />
      <Footer />
    </div>
  );
}

export default Home;
