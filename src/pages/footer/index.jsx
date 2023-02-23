
import { useContext } from 'react';
import { myContext } from '../../router';
import './style.scss';

function Footer() {
    let box = useContext(myContext);
    
    return (
      <>
        <div className='footer' style={{backgroundImage:`url(${box.bg})`}}>
          <div className='footer-box'>
            <div className='cake-zone-box'>
              <div>
                <h1><span className='icon-gift'/> CAKEZONE</h1>
                <p>Lorem diam sit erat dolor elitr et, diam lorem justo labore amet clita labore stet eos magna sit. Elitr dolor eirmod duo tempor lorem, elitr clita ipsum sea. Nonumy rebum et takimata ea takimata amet gubergren, erat rebum magna lorem stet eos. Diam amet et kasd eos duo dolore no.</p>
              </div>
            </div>
            <div className='get-in-contact'>
              <div className='contact-box'>
                <h2>GET IN TOUCH</h2>
                <p><span className='icon-location'/>123 Street, New York, USA</p>
                <p><span className='icon-mail'/>info@example.com</p>
                <p><span className='icon-phone'/>+012 345 67890</p>
                <div className='soc-site-box'>
                  <span className='icon-twitter'/>
                  <span className='icon-facebook'/>
                  <span className='icon-linkedin2'/>
                </div>
              </div>
              <div className='contact-box'>
                <h2>QUICK LINKS</h2>
                <p><span className='icon-arrow-up2'/>Home</p>
                <p><span className='icon-arrow-up2'/>About Us</p>
                <p><span className='icon-arrow-up2'/>Our Service</p>
                <p><span className='icon-arrow-up2'/>Meet the Team</p>
                <p><span className='icon-arrow-up2'/>Latest Blog</p>
                <p><span className='icon-arrow-up2'/>Contact Us</p>
              </div>
              <div className='contact-box'>
                <h2>NEWSLETTER</h2>
                <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                <div className='get-email-add'><input type="text"placeholder='Your Email'/><span className='get-email'>Sign Up</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
            <p><a href="3">© Your Site Name.</a> All Rights Reserved. Designed by <a href="#">HTML Codex</a></p>
        </div>
      </>
    );
}
export default Footer;