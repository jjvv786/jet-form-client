import { useEffect, useState } from 'react';
import './App.css';
import LoginSignup from './comp/LoginSignup';

function App() {

  
  const authUser = async(token) =>{
    const data = await fetch('https://jet-form-backend.herokuapp.com/login',{
      method:'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:{"email":"ml","password":"sdh"}
    })
    console.log(data);
  }

  authUser()

  if( true ){
    return (
      <>  
        <LoginSignup />
      </>
    );
  } else {
      return(
        <>
          hello
        </>
      )
  }
}

export default App;
