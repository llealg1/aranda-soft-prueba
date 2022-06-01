import { Suspense } from 'react';
import { BrowserRouter  } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Navigation from '../navigation/Navigation';
import '../scss/global.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<span>Loading...</span>}>
          <Navigation />
        </Suspense>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
