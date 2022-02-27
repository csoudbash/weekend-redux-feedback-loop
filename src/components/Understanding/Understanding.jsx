import { useHistory} from 'react-router-dom';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
function Understanding() {
    
const history = useHistory(); // allowing us to use useHistory() so we can navigate between pages
const dispatch = useDispatch();  // allowing the usage of useDispatch() so we can send data to the reducers in index.js

const [understanding, setUnderstanding] = useState(''); // use state variable for grabbing the input value and clearing it

const handleNext = () => {
    dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: understanding
    })

    setUnderstanding('');
    history.push("/support");
}

    return(
        <>
            <h2>How is Your Understanding?</h2>
            <input 
            className="input"
            type="number"
            value={understanding}
            onChange={(event => setUnderstanding(event.target.value))}
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
export default Understanding;