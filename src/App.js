import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';


function App() {
 


// JS Functionalities

  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Profile />
      <Footer/>
    </div>
  );
}

export default App;
