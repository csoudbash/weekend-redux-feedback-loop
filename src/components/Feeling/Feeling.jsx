import './Feeling.css'
import { useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Feeling() {

    const handleNext = () => {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })

        setFeeling('');
        history.push("/understanding");
    }
    
    const history = useHistory(); // allowing us to use useHistory() so we can navigate between pages
    const dispatch = useDispatch(); // allowing the usage of useDispatch() so we can send data to the reducers in index.js

    const [feeling, setFeeling] = useState(''); // use state variable for grabbing the input value and clearing it

    return(
    <>
        <h2>How are you feeling?</h2>
        <input 
        className="input"
        value={feeling}
        onChange={(event => setFeeling(event.target.value))}
        type="number"
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
export default Feeling;