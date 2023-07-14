import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import ClassComponent from './components/Components/ClassComponent';
import FunctionalComponent from './components/Components/FunctionalComponent';


function App() {

// JS Functionalities

  return (
    <div className="App">
      <Header />
      {/* <Products /> */}
      {/* <ClassComponent /> */}
      <FunctionalComponent />
      <Footer/>
    </div>
  );
}

export default App;


// NPM -> Node Package Manager -> package/modules/libraries -> npm install <pacakge-name>
//NPX - Node Package Extensives. -> to populate all the dependencies and files needed to run the app basically.