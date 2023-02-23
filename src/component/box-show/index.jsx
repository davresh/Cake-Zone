
import { useContext } from 'react';
import { myContext } from '../../router';
import CakeDiscount from '../about-cake';
import './style.scss';

function BoxShow(){
    let context = useContext(myContext);
    
    return (
        <>
            <div className='discout' style={{backgroundImage:`url(${context.service})`}}>
              <div className='discount-block'>
              <div className='discout-mix'>
                <div className='discout-boxs'>
                  {context.discount.map((el,id)=> <CakeDiscount key={id} cake={el} />)}
                </div>
                <div className='discount-text'>
                    <div><h1>30% DISCOUNT FOR THIS SUMMER</h1></div>
                    <div><button className='button-click'>Order Now</button></div>
                  </div>
              </div>
              </div>
            </div>
        </>
    )
}

export default BoxShow;