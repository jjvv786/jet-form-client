import { useState } from "react"

const LoginSignup = ()=>{
  const [data,setData] = useState({})
  const getData = (e)=>{
    console.log(data)
    setData({...data,[e.target.name]:e.target.value})
  }
  return(
    <>
      <div>
        <input type="email" name="email" placeholder="email" value={data.email} onChange={getData}/>
        <input type="password" name="password" placeholder="password" value={data.password} onChange={getData}/>
        <button>Submit</button>
      </div>
    </>
  )
}

export default LoginSignup