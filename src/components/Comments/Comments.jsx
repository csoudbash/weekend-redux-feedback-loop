import { useHistory} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const handleNext = () => {
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comment
        })

        setComment('');
        history.push("/thanks");
    }

    return(
    <>
        <h2>How are you feeling?</h2>
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