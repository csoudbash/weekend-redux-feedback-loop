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