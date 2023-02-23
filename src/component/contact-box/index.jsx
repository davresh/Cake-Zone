
import './style.scss';

function ContactBox({data}){
    return (
        <>
            <div className='contact-min-box'>
                <div>
                    <p><span className={data.icon}/></p>
                    <h3>{data.name}</h3>
                    <p>{data.loc}</p>
                </div>
            </div>
        </>
    )
}

export default ContactBox;