import {useSelector} from 'react-redux';
import { useEffect } from 'react';

function AdminPage() {
    
    // const useEffect = () => {
    //     getFeedback()
    // }

feedback = useSelector(store => store.feedback)
console.log(feedback);


    return(
        <h1>hello, poggers in the chat</h1>
    )
}
 export default AdminPage;