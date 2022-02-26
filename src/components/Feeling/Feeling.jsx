import './Feeling.css'
import { useHistory} from 'react-router-dom';

function Feeling() {
    
    const history = useHistory();



    return(
    <>
        <h2>How are you feeling?</h2>
        <input 
        className="input"
        type="number"
        min="1"
        max="5"
        >
        </input>  
        <button className='button'
        onClick={() => (history.push("/understanding"))}
        >Next</button>
    </>  
    )
}
export default Feeling;