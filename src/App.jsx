import React from 'react';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/styles.css";
import Pricing from './components/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';
import GuideDoc from './components/GuideDoc';

import { AuthProvider } from './components/AuthContext';  // import your AuthProvider
import Terms from './components/Terms';
import Privacy_Policy from './components/Privacy_Policy';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path='guidedoc' element={<GuideDoc />} />
            <Route path='Terms & Conditions' element={<Terms />} />
            <Route path='Privacy & Policy' element={<Privacy_Policy />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
