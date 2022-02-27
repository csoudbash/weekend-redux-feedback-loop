import {useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Supported() {
    
    const history = useHistory(); // allowing us to use useHistory() so we can navigate between pages
    const dispatch = useDispatch(); // allowing the usage of useDispatch() so we can send data to the reducers in index.js

    const [support, setSupport] = useState(''); // use state variable for grabbing the input value and clearing it

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
            <h2>How Supported are you feeling?</h2>
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