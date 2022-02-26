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
    
    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

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