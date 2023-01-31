import './App.css';
import './styles/global.css';
import {Route, Routes} from 'react-router-dom';
import NavigationBar from "./components/navbar/navbar";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
