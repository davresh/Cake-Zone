
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContactBox from '../../component/contact-box';
import PageBox from '../../component/page-box';
import { myContext } from '../../router';
import './style.scss';

function ContactUs() {
  let location = useLocation().pathname;
  let context = useContext(myContext)
    return (
      <>
        {location=='/contact'?<PageBox text='CONTACT US' text2='Contact'/>:''}
        <div className='contact-us' style={{backgroundImage:`url(${context.bg})`}}>
          <div className='contact-date'>
            {context.contactData.map((el,id)=> <ContactBox key={id}  data={el}/> )}
          </div>
          <div className='contact-buttons'>
            <div>
              <input type="text" className='w-50' placeholder='Your Name'/>
              <input type="text" className='w-50' placeholder='Your Email'/>
            </div>
            <div><input type="text" className='w-100' placeholder='Subject'/></div>
            <div><textarea className='w-100' placeholder='Message'/></div>
            <div className='col-out'><button className='w-100'>Send Message</button></div>
          </div>
        </div>
      </>
    );
}
export default ContactUs;