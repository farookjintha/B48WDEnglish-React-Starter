import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';


function App() {
 


// JS Functionalities

  return (
    <div className="App">
      <Header />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
