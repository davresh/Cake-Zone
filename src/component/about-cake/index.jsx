
import './style.scss';

function CakeDiscount({cake}){
    return (
        <>
            <div className='discount-box'>
                <h2>{cake.name}</h2>
                <p>{cake.text}</p>
                <div><button>{cake.link}</button><span className='icon-arrow-up2'/></div>
            </div>
        </>
    )
}
export default CakeDiscount;