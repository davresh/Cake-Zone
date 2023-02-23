
import { useContext } from 'react';
import { myContext } from '../../router';
import './style.scss';

function PageBox({text,text2}){
    let box = useContext(myContext);
    return (
        <>
        <div className='page-box' id='header' style={{backgroundImage:`url(${box.bg})`}}>
            <div>
                <h1 className=''>{text}</h1>
                <h3>HOME &#9633; {text2}</h3>
            </div>
        </div>
        </>
    )
}

export default PageBox;