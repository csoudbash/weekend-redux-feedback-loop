import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


function ReviewPage() {

    const history = useHistory();
    const feedback = useSelector(store => store.feedback)
    console.log(feedback);

    const handleSubmit = () => {
        axios.post('/feedback', feedback)
        .then((response) => {
            console.log('post is now done', response);
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