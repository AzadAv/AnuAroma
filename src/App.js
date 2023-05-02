import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Meals from './components/Meals/Meals'
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <LandingPage />
      <Meals /> 
    </Fragment>
  );
}

export default App;
