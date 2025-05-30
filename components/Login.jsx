import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  const navigateHnadler = () =>{
    navigate(`/`)
  }
  return (
    <div className="loginPage">
      <div className="container">
        <h1>Welcome,<br /> Please <span className="text-red-400 font-bold">Login</span> To Enjoy Our Site</h1>
        <form>
          <input className="py-3 px-4 " type="text"placeholder="Enter UserName"/>
          <input className="py-3 px-4" type="password" placeholder="Enter Password" />
          <button onClick={navigateHnadler} className=" bg-red-400  ">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
