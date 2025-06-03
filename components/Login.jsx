import { useNavigate } from "react-router-dom"
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const navigateHnadler = () =>{
    if(username == 'admin' && password == '1234'){
      navigate( '/admin');
    }
    else{
      navigate('/');
    }
  }
  
  return (
    <div className="loginPage">
      <div className="container">
        <h1>Welcome,<br /> Please <span className="text-red-400 font-bold">Login</span> To Enjoy Our Site</h1>
        <form>
          <input 
          onChange={(e)=> setusername(e.target.value)}
          value={username}
          className="py-3 px-4 " type="text"placeholder="Enter UserName"/>
          <input 
          onChange={(e)=> setpassword(e.target.value)}
          value={password}
          className="py-3 px-4" type="password" placeholder="Enter Password" />
          <button onClick={navigateHnadler} className=" bg-red-400  ">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
