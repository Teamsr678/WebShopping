import React, {useState, useEffect} from 'react'
import Testservice from './Testservice'

function Test() {

    const [test, settest] = useState([])
    const [text, settext] = useState([])

    useEffect(() => {
        gettest()
        gettext()
    }, [])

    const gettest = () => {
        Testservice.gettest().then((response) => {
            settest(response.data)
            console.log(response.data);
        });
    };

    const gettext = () =>{
        Testservice.gettext().then((response) => {
            settext(response.data)
        });
    };

    return (
        <div className = "container">    
            <h1 className = "text-center">error : {text}</h1>
            <h1 className = "text-center"> test List</h1>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> test Id</th>
                        <th> test Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        test.map(
                                test =>
                                <tr key = {test.id}>
                                    <td> {test.id }</td> 
                                    <td> {test.email }</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Test;