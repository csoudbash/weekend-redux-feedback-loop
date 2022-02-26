import './Feeling.css'

function Feeling() {
    return(
    <>
        <h2>How are you feeling?</h2>
        <input 
        className="input"
        type="number"
        min="1"
        max="5"
        >
        </input>  
        <button className='button'>Next</button>
    </>  
    )
}
export default Feeling;