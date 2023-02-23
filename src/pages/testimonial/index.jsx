
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Client from '../../component/client';
import PageBox from '../../component/page-box';
import { myContext } from '../../router';
import './style.scss';

function Testimonial() {
  const context = useContext(myContext);
  let [slid,setSlid] = useState(1);
  let [trans,setTrans] = useState(-110);
  let location = useLocation().pathname;

    return (
      <>
        {location=='/test'?<PageBox text='SERVICE' text2='Service'/>:''}
        <div className='menu-site-box'>
          <h1 className='crispy'>Testimonial</h1>
          <h1 className='offer-h1'>OUR CLIENTS SAY!!!</h1>
          <div className='hr-box'><div className='hr'><div/></div></div>
          <div className='testimonal-box-carusel'>
              <div className='box-carusel' style={{transform:`translateX(${trans}px)`}} >
                  {context.testimonial.map((el,id)=> <Client key={id} client={el}/>)}
              </div>
              <div className='slider-btn'>
                <div className={`slid-check ${slid==1?'slid-check-btn':''}`} onClick={()=>{
                    setSlid(1)
                    setTrans(-110)
                }}/>
                <div className={`slid-check ${slid==2?'slid-check-btn':''}`} onClick={()=>{
                  setSlid(2)
                  setTrans(-520)
                }}/>
                <div className={`slid-check ${slid==3?'slid-check-btn':''}`} onClick={()=>{
                  setSlid(3)
                  setTrans(-920)
                }}/>
                <div className={`slid-check ${slid==4?'slid-check-btn':''}`} onClick={()=>{
                  setSlid(4)
                  setTrans(-1320)
                }}/>
              </div>
          </div>
        </div>
      </>
    );
}
export default Testimonial;