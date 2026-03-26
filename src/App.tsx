import { useLoading } from './hooks/useLoading';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Divider from './components/common/Divider/Divider';
import Profile from './components/Profile/Profile';
import Gallery from './components/Gallery/Gallery';
import Traits from './components/Traits/Traits';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  const isLoaded = useLoading(1800);

  return (
    <div className={styles.stage} data-playing={isLoaded || undefined}>
      <Loading className={styles.loading} />
      <div className={styles.content}>
        <Header />
        <main>
          <Hero isVisible={isLoaded} />
          <Divider />
          <Profile />
          <Divider />
          <Gallery />
          <Divider />
          <Traits />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
