import AppBar from 'components/AppBar/AppBar';
import Hero from 'components/Hero/Hero';
import AboutTheService from 'components/AboutTheService/AboutTheService';
import Advantages from 'components/Advantages/Advantages';
import TheyTrustUs from 'components/TheyTrustUs/TheyTrustUs';

const HomePage = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main className="container">
        <Hero />
        <AboutTheService />
        <Advantages />
        <TheyTrustUs />
      </main>
    </>
  );
};

export default HomePage;
