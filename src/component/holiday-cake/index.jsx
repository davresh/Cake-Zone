
import './style.scss';

function Holiday({day,img}){
    
    return (
        <>
            <div className='holiday-cake-box'>
                <div className='holiday-img'>
                    <img src={img[0]} alt="" />
                    <div className='holiday-val'>${day.val}.00</div>
                </div>
                <div className='holiday-text'>
                    <h2>{img[1]}</h2>
                    <p>{day.text}</p>
                </div>
            </div>
        </>
    )
}
export default Holiday;