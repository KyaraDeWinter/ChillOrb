import './navbar.css';
import '../../styles/global.css';
import {  Link } from "react-router-dom";

function Navigationbar() {
  return (
    <div className='navbar'>
        <li>
            <Link to="/">ChillOrb.0</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </div>
  );
}

export default Navigationbar;
