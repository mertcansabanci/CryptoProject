import React from 'react';
import Article from './components/Article';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Section from './components/Section';


function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Article/>
      <Section />
      <Footer />
    </>
  );
}

export default App;
