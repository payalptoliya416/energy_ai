import React from 'react';
import Header from './components/Home-page/Header';
import Hero from './components/Home-page/Hero';
import Services from './components/Home-page/Services';
import CallToAction from './components/Home-page/CallToAction';
import MoodCarousel from './components/Home-page/MoodCarousel';
import HowWorks from './components/Home-page/HowWorks';
import WhoToSendEnergy from "./components/Home-page/WhoToSendEnergy";
import UserComparison from "./components/Home-page/UserComparison";
import Benefits from "./components/Home-page/Benefits";
import WhyQuantum from "./components/Home-page/WhyQuantum";
import Transformations from "./components/Home-page/Transformations";
import Review from "./components/Home-page/Review";
import Subscription from "./components/Home-page/Subscription";
import Footer from "./components/Home-page/Footer";
// import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <CallToAction />
      <MoodCarousel />
      <HowWorks />
      <WhoToSendEnergy />
      <UserComparison />
      <Benefits />
      <WhyQuantum />
      <Transformations />
      <Review />
      <Subscription />
      <Footer />
    </div>
  );
};

export default App;