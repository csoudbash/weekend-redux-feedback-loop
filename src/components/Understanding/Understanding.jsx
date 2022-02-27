import { useHistory} from 'react-router-dom';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
function Understanding() {
    
const history = useHistory();
const dispatch = useDispatch();

const [understanding, setUnderstanding] = useState('');

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