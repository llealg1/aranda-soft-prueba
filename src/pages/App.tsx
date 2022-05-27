import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Header from '../layouts/Header';
import Navigation from '../navigation/Navigation';
import '../scss/global.scss'
import { NavLink,  BrowserRouter  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<span>Loading...</span>}>
          <Navigation />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
