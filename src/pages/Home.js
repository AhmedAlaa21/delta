import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

// Components: Hero, Features, Content, Carousel.
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </div>
  );
};

export default Home;
