import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function ReviewPage() {

    const history = useHistory(); // allowing us to use useHistory() so we can navigate between pages
    const feedback = useSelector(store => store.feedback)
    const dispatch = useDispatch(); // allowing the usage of useDispatch() so we can send data to the reducers in index.js

    const handleSubmit = () => {
        axios.post('/feedback', feedback)
        .then((response) => {
            console.log('post is now done', response);

            dispatch({
                type: 'DELETE_VALUES',
            })

        }).catch((error) => {
            console.log('rut ro scoob', error);
        })

        history.push('/thanks');
    }

    // for the comments, maybe have it conditionally render based on whether or not comments were given :)
    return(
        <>
        <h4>Feeling: {feedback.feeling}</h4>
        <h4>Understanding: {feedback.understanding}</h4>
        <h4>Support: {feedback.support}</h4>
        <h4>Comments: {feedback.comments}</h4> 
        <button className='button'
        onClick={handleSubmit}
       >Correct</button>
       </>
    )
}

export default ReviewPage;