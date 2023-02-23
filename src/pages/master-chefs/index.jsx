
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PageBox from '../../component/page-box';
import Shef from '../../component/shef';
import { myContext } from '../../router';
import './style.scss';

function MasterChefs() {
    let location = useLocation().pathname;
    const context = useContext(myContext);
    return (
      <>
        {location=='/master'?<PageBox text='MASTER CHEFS' text2='Master Chefs'/>:''}
        <div className='menu-site-box'>
          <h1 className='crispy'>Team Members</h1>
          <h1 className='offer-h1'>OUR MASTER CHEFS</h1>
          <div className='hr-box'><div className='hr'><div/></div></div>
          <div className="about-user-box">
            {context.shefPower.map((el,id)=> <Shef key={id} shef={el} />)}
          </div>
        </div>
      </>
    );
}
export default MasterChefs;