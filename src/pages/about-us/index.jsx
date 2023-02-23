
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Award from '../../component/award';
import Experience from '../../component/experience';
import PageBox from '../../component/page-box';
import { myContext } from '../../router';
import './style.scss';

function AboutUs() {
    let location = useLocation().pathname;
    let context = useContext(myContext)
    return (
      <>
        {location=='/about'?<PageBox text='ABOUT US' text2='About'/>:''}
        <div className='menu-site-box'>
          <h1 className='crispy'>About Us</h1>
          <h1 className='offer-h1'>WELCOME TO CAKEZONE</h1>
          <div className='hr-box'><div className='hr'><div></div></div></div>
          <div className='cake-box-about'>
            <div className='cake-img-about'>
              <img src={context.about} alt="Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo" />
            </div>
            <div className='about-cake'>
              <h1>Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo</h1>
              <p>Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
              <div className='block-award'>
                {context.award.map((el,id) => <Award key={id} award={el} /> )}
              </div>
            </div>
          </div>
        </div>
        <Experience val={context.iconVal}/>
      </>
    );
}
export default AboutUs;