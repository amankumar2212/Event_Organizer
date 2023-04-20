import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CollegeLogin.css'
import LoginImg from '../images/collegelogin.gif';
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { toast, ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";

const CollegeLogin = () => {
  const navigate = useNavigate();
  const [college, setCollege] = useState({ email: "", password: "" });
  const [visible, setVisible] = useState('');
  const [togglepass, setTogglepass] = useState("password");

  const TogglePassword = () => {
    if (togglepass === "password")
      return setTogglepass("text");

    setTogglepass("password");
  }
  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });

  const validate = () => {
    let result = true;
    if (college.email === '' || college.email == null) {
      result = false;
      toast.warning('Please Enter Username', { transition: bounce });

    }
    if (college.password === '' || college.password == null) {
      result = false;
      toast.warning('Please Enter Password', { transition: bounce });

    }
    return result;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:4000/collegesignup/" + college.email).then((res) => {

        return res.json();

      }).then((resp) => {

        console.log(resp);
        if (Object.keys(resp).length === 0) {
          toast.error("Credentials NOT FOUND. Please Register First");
        }

        else {
          if (resp.collegepassword === college.password) {
            toast.success("Login Successfully", {
              position: toast.POSITION.TOP_CENTER
            });
            navigate('/');

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

  const handleInputCollege = (event) => {
    const { name, value } = event.target;
    setCollege({ ...college, [name]: value });
  };
  return (
    <div className='usercollegelogin'>
      <div className='logincollegeImage'>
        <img src={LoginImg} alt='loginimage' />
      </div>

      <div className='maincollegelogin'>
        <h1>Sign in as a College</h1>

        <label>Username <input name='email' type="text" placeholder='Enter Your Username' value={college.email} onChange={handleInputCollege} /> </label>


        <label>Password <input name='password' type={togglepass} placeholder='Enter Your Password' value={college.password} onChange={handleInputCollege} />
          <div className="collegeicon">
            {visible ?
              <AiFillEye onClick={() => { TogglePassword(); setVisible(!visible) }} /> :
              <AiFillEyeInvisible onClick={() => { TogglePassword(); setVisible(!visible) }} />
            }</div>
        </label>

        <Link to='/collegesignup'>
          <p>Don't Have Account?</p>
        </Link>
        <button onClick={handleSubmit} className='collegesubmit' type='submit'>Login</button>

      </div>
      <ToastContainer transition={bounce} />
    </div>
  )
}

export default CollegeLogin