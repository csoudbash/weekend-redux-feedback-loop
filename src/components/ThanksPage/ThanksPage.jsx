
import {useHistory} from 'react-router-dom';

function ThanksPage() {
    
    const history = useHistory(); // allowing us to use useHistory() so we can navigate between pages

    const handleNext = () => { 
        history.push("/");
    }

    return(
        <>
        <h4>Thanks</h4>
        <button onClick={handleNext}>Do Another?</button>
        </>
    )
}


export default ThanksPage