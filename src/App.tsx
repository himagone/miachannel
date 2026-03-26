import { useState } from 'react';
import { useLoading } from './hooks/useLoading';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Divider from './components/common/Divider/Divider';
import Profile from './components/Profile/Profile';
import Gallery from './components/Gallery/Gallery';
import Traits from './components/Traits/Traits';
import Footer from './components/Footer/Footer';

function App() {
  const isLoaded = useLoading(3000);
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && (
        <Loading isLoaded={isLoaded} onExitComplete={() => setShowLoading(false)} />
      )}
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
    </>
  );
}

export default App;
