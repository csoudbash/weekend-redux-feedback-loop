
import {useHistory} from 'react-router-dom';

function ThanksPage() {
    
    const history = useHistory();

    const handleNext = () => { 
        history.push("/review");
    }

    return(
        <>
        <h4>Thanks</h4>
        <button onClick={handleNext}>You're Welcome</button>
        </>
    )
}


export default ThanksPage