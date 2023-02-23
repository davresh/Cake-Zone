import { useContext } from 'react';
import { myContext } from '../../router';
import { useEffect,useState } from 'react';
import './style.scss';

function Experience({val}){
    let [num,setNum] = useState(0)
    let box = useContext(myContext);
    useEffect(() => {
        if(num===0 && box.scrollTop[0]>=80){
            for(let i = 1;i <= 1234;i++){
                setTimeout(()=>{
                    setNum(i)
                },1)
                
            }
        }
      }, [box.scrollTop[0]]);
    return (
        <>
            <div className='experience' style={{backgroundImage:`url(${box.bg})`}}>
                <div className="exper-boxs">
                    {val.map((val,id)=> {
                        return (
                            <div key={id} className='exper-block'>
                                <div><span className={val.icon}/></div>
                                <div>
                                    <h3>{val.name}</h3>
                                    <h1>{num}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Experience;