import './App.css';
import './styles/global.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/navbar";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router>
      <NavigationBar />
        <Route path='/' exact component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/shop' component={Shop} />
        <Route path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
