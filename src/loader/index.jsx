
import useLoader from '../hooks/useLoader';
import './style.scss'

function Loader(){
    const {loading} = useLoader()
    return loading && (
        <div className="Loader-box">
            <span class="loader-anim"></span>
        </div>
    )
}
export default Loader;