import './login.scss'
import { useState, useEffect } from 'react'
// import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../features/auth/authService'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// import Spinner from '../components/Spinner'
import axios from "axios";
import Navbar from '../../../components/common/navbar/Navbar'
import MainNavbar from '../../../components/common/mainNavbar/MainNavbar'

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

 console.log(credentials)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )



  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  //     navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };


  const handleClick = (e) => {
    e.preventDefault()

    // const userData = {
    //   username,
    //   password,
    // }

    // dispatch(login(credentials))
    login(dispatch, credentials)
  }


  useEffect(() => {
    // if (isError) {
    //   toast.error(message)
    // }

    if (isSuccess || user) {
      navigate('/')
    }

    // dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

 



  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
    {/* <Navbar/> */}
    <MainNavbar/>
    <h1>Login</h1>
    <div className="login">
      
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={isLoading} onClick={handleClick} className="lButton">
          Login
        </button>
        {isError && <span style={{ color: 'red' }}>Somethin went Wrong</span>}
      </div>
    </div>
    </>
  )
}

export default Login