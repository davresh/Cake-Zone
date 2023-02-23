
import './style.scss';

function Client({client}){
    return (
        <>
            <div className='client'>
                <div className='client-user'>
                    <div className='client-img'>
                        <img src={client.img} alt={client.name} />
                    </div>
                    <div className='client-name'>
                        <h2>{client.name}</h2>
                        <h3>{client.proff}</h3>
                    </div>
                </div>
                <div className='client-text'>
                    <p>{client.text}</p>
                </div>
            </div>
        </>
    )
}

export default Client;