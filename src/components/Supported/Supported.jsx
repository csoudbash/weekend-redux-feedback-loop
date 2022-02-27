import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Supported() {
    
    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('');

    const handleNext = () => {
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })

        setSupport('');
        history.push("/comments");
    }
    
    return(
        <>
            <h2>How are you feeling?</h2>
            <input 
            className="input"
            type="number"
            value={support}
            onChange={(event => setSupport(event.target.value))}
            min="1"
            max="5"
            >
            </input>  
            <button className='button'
             onClick={handleNext}
            >Next</button>
        </>  
        )
    }
export default Supported;