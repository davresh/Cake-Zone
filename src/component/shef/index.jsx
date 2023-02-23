
import './style.scss';

function Shef({shef}){
    return (
        <>
            <div className='shef-power'>
                <div className='shef-boxs-img'>
                    <img src={shef.img} alt={shef.name} />
                    <div className='shef-soc-site'>
                            {shef.icons.map((icon,id)=>{
                                return (
                                    <span key={id} className={icon}/>
                                )
                            })}
                    </div>
                </div>
                <div className='shef-boxs-inf'>
                    <div>
                        <h2>{shef.name}</h2>
                        <h4>{shef.proff}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shef;