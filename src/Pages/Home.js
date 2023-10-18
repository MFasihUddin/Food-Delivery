import React from "react";

//components
import MyCard from "../components/MyCard";
import Carousel from "../components/MyCarousel";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import MyCarousel from "./../components/MyCarousel";

function Home() {
  return (
    <div>
      <div>
        <MyNavbar />
      </div>
      <div>
        <MyCarousel />
      </div>
      <div>
        <MyCard />
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  );
}

export default Home;
