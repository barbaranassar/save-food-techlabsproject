import Header from '../components/header/header';
import Main from '../components/main/main';
import InfoPills from '../components/infopills/infopills';
import Stats from '../components/stats/stats';
import Footer from '../components/footer/footer';
import Restaurant from '../components/restaurant/restaurant';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Restaurant />
      <InfoPills />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
