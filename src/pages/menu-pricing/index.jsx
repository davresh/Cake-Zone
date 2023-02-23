
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CakeDiscount from '../../component/about-cake';
import Holiday from '../../component/holiday-cake';
import PageBox from '../../component/page-box';
import { myContext } from '../../router';
import './style.scss';

function MenuPricig() {
  let location = useLocation().pathname;
  let [hal,setHal] = useState('birthday');
  const context = useContext(myContext);
    return (
      <>
        {location=='/menu'?<PageBox text='MENU & PRICIG' text2='Menu & Pricig'/>:''}
        <div className='menu-site-box'>
          <h1 className='crispy'>Menu Pricing</h1>
          <h1 className='offer-h1'>EXPLORE OUR CAKES</h1>
          <div className='hr-box'><div className='hr'><div></div></div></div>
          <div className='holiday'>
            <div className='holiday-box'>
              <button onClick={()=>{
                  setHal('birthday')
              }}>birthday</button>
              <button onClick={()=>{
                  setHal('wedding')
              }}>wedding</button>
              <button onClick={()=>{
                  setHal('custom')
              }}>custom</button>
            </div>
          </div>
          <div className='holiday-cake'>
              {context.holiday.map((el,id) => <Holiday 
                key={id}  day={el} img={context.holidayImg[hal]}
              />)}
          </div>
        </div>
        <div className='offer-box' style={{backgroundImage:`url(${context.offer})`}}>
          <div className='offer'>
            <div className='offer-top'>
              <h1 className='crispy'>Special Kombo Pack</h1>
              <h1 className='offer-h1'>SUPER CRISPY CAKES</h1>
              <div className='hr-box'><div className='hr'><div/></div></div>
              <p>Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
                <div className='buttons-offer'>
                  <button className='button-click'>Shope Now</button>
                  <button className='button-click bord-button'>Read More</button>
                </div>
            </div>

          </div>
        </div>
      </>
    );
}
export default MenuPricig;