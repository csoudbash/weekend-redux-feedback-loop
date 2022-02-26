import { useHistory} from 'react-router-dom';


function Understanding() {
    
const history = useHistory();

    return(
        <>
            <h2>How is Your Understanding?</h2>
            <input 
            className="input"
            type="number"
            min="1"
            max="5"
            >
            </input>  

            <button className='button'
            onClick={() => (history.push("/support"))}
            >Next</button>
        </>
    )
}
export default Understanding;