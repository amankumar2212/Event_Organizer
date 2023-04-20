import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AttendeeLogin.css'
import LoginImg from '../images/attendeelogin.gif';
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";


const AttendeeLogin = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userid, setUserid] = useState('');
  const [attendee, setAttendee] = useState({ email: "", password: "" });
  const [togglepass, setTogglepass] = useState("password");
  const [visible, setVisible] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  //Validation
  const validate = () => {
    let result = true;
    if (attendee.email === '' || attendee.email == null) {
      result = false;
      toast.error('Please Enter Username', { transition: bounce });

    }
    if (attendee.password === '' || attendee.password == null) {
      result = false;
      toast.error('Please Enter Password',);

    }
    return result;

  }

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });


  const findId = async () => {
    const response = await fetch("http://localhost:4000/attendee");
    const jsonData = await response.json();
    setData(jsonData);
  }


  const triggerLogin = (e) => {
    e.preventDefault();

    if (validate()) {

      findId();
      const objData = data.find(obj => obj.email === attendee.email);
      setUserid(objData.id);

      fetch("http://localhost:4000/attendee/" + userid).then((res) => {

        return res.json();

      }).then((resp) => {

        if (Object.keys(resp).length === 0) {
          toast.error("Credentials NOT FOUND. Please Register First");
        }

        else {
          if (resp.email === attendee.email && resp.attendeepassword === attendee.password) {
            toast.success("Login Successfully", {
              position: toast.POSITION.TOP_CENTER
            });
            sessionStorage.setItem('token-info', JSON.stringify(resp))
            setIsLoggedin(true);
            navigate('/' + userid);
          }
          else {
            toast.error("Please Enter Valid Credentials");
          }
        }
      }).catch((err) => {
        toast.error("Login Failed Due to: " + err.message);
      })
    }

  }

  const Logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  }

  const TogglePassword = () => {
    if (togglepass === "password")
      return setTogglepass("text");

    setTogglepass("password");
  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setAttendee({ ...attendee, [name]: value });
  };

  return (
    <div className='userlogin'>
      <ToastContainer />
      <div className='loginImage'>
        <img src={LoginImg} alt='loginimage' />
      </div>

      <div className='mainlogin'>
        <h1>Sign in as a User</h1>

        <label>Username
          <input
            name='email'
            type="text"
            placeholder='Enter Your Email'
            value={attendee.email}
            onChange={handleInput}
            required />

        </label>


        <label>Password
          <input
            name='password'
            type={togglepass}
            placeholder='Enter Your Password'
            value={attendee.password}
            onChange={handleInput}
            required />
          
        </label>
        <div className="attendeeicon">
            {visible ?
              <AiFillEye onClick={() => { TogglePassword(); setVisible(!visible) }} /> :
              <AiFillEyeInvisible onClick={() => { TogglePassword(); setVisible(!visible) }} />
            }
          </div>
        <div className='forgot-password'>
          <Link>Forgot Password ?</Link>
        </div>

        <Link to='/attendeesignup'>
          <p>Don't Have Account ?</p>
        </Link>
        <button onClick={triggerLogin} className='submit' type='submit'>Attendee Login</button>

      </div>
    </div>
  )
}

export default AttendeeLogin