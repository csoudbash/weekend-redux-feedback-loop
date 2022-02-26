import {useHistory} from 'react-router-dom';

function Supported() {
    
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
             onClick={()=>(history.push("/comments"))}
            >Next</button>
        </>  
        )
    }
export default Supported;