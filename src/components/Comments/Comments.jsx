import { useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';

function Comments() {

    const history = useHistory(); // allowing us to use useHistory() so we can navigate between pages
    const dispatch = useDispatch(); // allowing the usage of useDispatch() so we can send data to the reducers in index.js

    const [comment, setComment] = useState(''); // use state variable for grabbing the input value and clearing it
    
    const handleNext = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comment
        })

        setComment('');
        history.push("/review");
    }

    return(
    <>
        <h2>Any Comments?</h2>
        <input 
        className="input-comment"
        type="text"
        value={comment}
        onChange={(event => setComment(event.target.value))}
        >
        </input>  
        <button className='button'
        onClick={handleNext}
        >Next</button>

    </>  
    )
}
export default Comments;