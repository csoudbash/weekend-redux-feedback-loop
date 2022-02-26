import { useHistory} from 'react-router-dom';


function Comments() {

    const history = useHistory();

    return(
    <>
        <h2>How are you feeling?</h2>
        <input 
        className="input-comment"
        type="text"
    
        >
        </input>  
        <button className='button'
        onClick={()=>(history.push("/review"))}
        >Next</button>

    </>  
    )
}
export default Comments;