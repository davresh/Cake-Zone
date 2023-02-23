
import { useLocation } from 'react-router-dom';
import BoxShow from '../../component/box-show';
import PageBox from '../../component/page-box';
import './style.scss';

function Services() {
  let location = useLocation().pathname;
    return (
      <>
        {location=='/service'?<PageBox text='SERVICE' text2='Service'/>:''}
        <BoxShow/>
      </>
    );
}
export default Services;