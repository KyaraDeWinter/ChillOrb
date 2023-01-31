import './about.css';
import '../../styles/global.css';
import Orbs from '../../components/orb/orb';


function About() {
  return (
    <div className='about'>
      <div className='about_column'>
        <h1>About</h1>
        <div className='about_gradient'>
          <h1>ChillOrb.0</h1>
        </div>
      </div>
      <p className='about_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Orbs/>
    </div>
  );
}

export default About;