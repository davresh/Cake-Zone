import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

export default function(){
    const [loading,setLoading] = useState(false)
    const location = useLocation().pathname
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1200)
    },[location])

    return {
        loading
    }
}