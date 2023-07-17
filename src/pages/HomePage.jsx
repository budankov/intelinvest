import AppBar from 'components/AppBar/AppBar';
import Hero from 'components/Hero/Hero';
import ImportTransactions from 'components/ImportTransactions/ImportTransactions';
import AboutTheService from 'components/AboutTheService/AboutTheService';
import Advantages from 'components/Advantages/Advantages';
import TheyTrustUs from 'components/TheyTrustUs/TheyTrustUs';
import FollowPopularInvestors from 'components/FollowPopularInvestors/FollowPopularInvestors';
import JoinInvestors from 'components/JoinInvestors/JoinInvestors';
import Footer from 'components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main className="wrapper-all">
        <Hero />
        <AboutTheService />
        <ImportTransactions />
        <Advantages />
        <TheyTrustUs />
        <FollowPopularInvestors />
        <JoinInvestors />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
