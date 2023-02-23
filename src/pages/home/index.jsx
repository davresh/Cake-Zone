
import { useState } from 'react';
import { useContext } from 'react';
import CakeDiscount from '../../component/about-cake';
import Award from '../../component/award';
import BoxShow from '../../component/box-show';
import Client from '../../component/client';
import Experience from '../../component/experience';
import Holiday from '../../component/holiday-cake';
import Shef from '../../component/shef';
import { myContext } from '../../router';
import AboutUs from '../about-us';
import MasterChefs from '../master-chefs';
import MenuPricig from '../menu-pricing';
import Testimonial from '../testimonial';
import './style.scss';

function Home() {
    const context = useContext(myContext);
    return (
      <>
        <div className='carousel'  id='header' style={{backgroundImage:`url(${context.hero})`}}>
            <div className='carousel-text'>
              <div>
                <h1 className='crispy'>Super Crispy</h1>
                <h1 className='cake'>CAKEZONE</h1>
                <h1 className='best'>THE BEST CAKE IN LONDON</h1>
                <div className='btn-play'>
                  <div><button  className='button-click'>Read More</button></div>
                  <div className='text-anim'><span className='icon-play3'/><h1>Play Video</h1></div>
                </div></div>
            </div>
        </div>
        <AboutUs/>
        <MenuPricig/>
        <MasterChefs/>
        <BoxShow/>
        <Testimonial/>
      </>
    );
}
export default Home;