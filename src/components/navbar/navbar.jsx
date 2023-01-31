import './navbar.css';
import '../../styles/global.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navigationbar() {
  return (
    <nav className='navbar'>
        <Link to='/' className='navbar_title'>ChillOrb.0</Link>
        <ul>
            <li>
                <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink to="/about">Shop</CustomLink>
            </li>
            <li>
                <CustomLink to="/about">Contact</CustomLink>
            </li>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props}) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navigationbar;
