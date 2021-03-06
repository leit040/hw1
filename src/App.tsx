import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainContainer/>
        <Footer/>
    </div>
  );
}

export default App;
