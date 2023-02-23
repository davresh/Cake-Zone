
import './style.scss';

function Award({award}){
    return (
        <>
            <div className='award-list'>
                <span className={award.icon}/>
                <h2>{award.name}</h2>
                <p>{award.text}</p>
            </div>
        </>
    )
}
export default Award;