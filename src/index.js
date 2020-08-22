import React, {  useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


const App = () => {

    const [currentLatitude, setCurrentLatitude] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")

 
        window.navigator.geolocation.getCurrentPosition((position)=> {
                setCurrentLatitude(position.coords.latitude)
        },(err)=> {
            console.log(err)
            setErrorMessage(err.message)
        });
    

    return (
    <div>
   {
       !errorMessage && !currentLatitude ? <Spinner/> : !errorMessage ? <SeasonDisplay lat = {currentLatitude}/>  : <h1 style={{color: 'red'}}>Error : {errorMessage}</h1>
   }  
   
</div>  
    )
}

ReactDOM.render(<App />, document.getElementById('root'));