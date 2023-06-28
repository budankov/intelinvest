import Hero from 'components/Hero/Hero';
import AboutTheService from 'components/AboutTheService/AboutTheService';
import Advantages from 'components/Advantages/Advantages';
import TheyTrustUs from 'components/TheyTrustUs/TheyTrustUs';

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <AboutTheService />
      <Advantages />
      <TheyTrustUs />
    </div>
  );
};

export default HomePage;
