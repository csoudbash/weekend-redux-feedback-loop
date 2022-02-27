
import {useHistory} from 'react-router-dom';

function ThanksPage() {
    
    const history = useHistory();

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