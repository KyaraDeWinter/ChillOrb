import './landing.css';
import '../../styles/global.css';
import Orbs from '../../components/orb/orb';

function Landing() {
  return (
      <div className='landing'>
        <div className='title'>
          <h1>Enhance your event</h1>
          <div className='title_column'>
            <h1>with</h1>
            <div className='title_gradient'>
              <h1>ChillOrb.0</h1>
            </div>
          </div>
        <p>Party Game | Ambient Light</p>
        </div>
        <Orbs/>
        <div className='coming_soon'>
          <h1 className='soon'>Coming Soon</h1>
          <a className='button' href='/about'>Get More Info</a>
        </div>
      </div>
  );
}

export default Landing;
