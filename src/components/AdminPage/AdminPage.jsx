import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';


function AdminPage() {
    
    useEffect( () => {// on page load, run getFeedback
        getFeedback();
      }, [])

    const getFeedback = () => {
        // axios({
        //     method: 'GET',
        //     url: '/feedback',
        // }).then((response) => {
        //     console.log('da response be', response);
        // }).catch((error) => {
        //     console.log('da thing be da thing', error);
        // })
    }     

feedback = useSelector(store => store.feedback)
console.log(feedback);


    return(
        <h1>hello, poggers in the chat</h1>
    )
}
 export default AdminPage;