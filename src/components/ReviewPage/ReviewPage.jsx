import {useHistory} from 'react-router-dom';

function ReviewPage() {


    const history = useHistory();

    return(
        <>
        <h2>should work</h2>
        <button className='button'
        onClick={()=>(history.push("/"))}
       >Next</button>
       </>
    )
}

export default ReviewPage;