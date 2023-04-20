import React, { useState } from "react"
import './AttendeeSignup.css'
import links from '../../images/links.gif'
import IndiaStates from '../states of india/IndiaStates'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import attendeesignup from '../../images/attendeesignup.gif'
import attendeesignup1 from '../../images/attendeesignup1.gif'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast, cssTransition } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  const [togglepass, setTogglepass] = useState("password");
  const [visible, setVisible] = useState('');
  const [stateDropdown, setStateDropdown] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    email: "",
    attendeepassword: "",
    attendeecpassword: "",
    contact: "",
    address: "",
    city: "",
    attendeestate: "",
    pincode: "",
    website: "",
    ainstagram: "",
    afacebook: "",
    alinkedin: "",
    portfolio: ""
  });

  const TogglePassword = () => {
    if (togglepass === "password")
      return setTogglepass("text");

    setTogglepass("password");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });


  const validatestep1 = () => {
    let res1 = true;

    if (formData.email === '' || formData.email == null) {
      res1 = false;
      toast.error('Please Enter your Email', { transition: bounce });

    }
    if (formData.attendeepassword === '' || formData.attendeepassword == null) {
      res1 = false;
      toast.error('Please Enter Password', { transition: bounce });

    }
    if (formData.attendeecpassword === '' || formData.attendeecpassword == null) {
      res1 = false;
      toast.error('Please Repeat Password', { transition: bounce });

    }
    if (formData.attendeecpassword !== formData.attendeepassword) {
      res1 = false;
      toast.error('Password Does Not Match', { transition: bounce });
    }

    if (res1) {
      nextStep();
    }
    return res1;
  }

  const validatestep2 = () => {
    let res2 = true;
    if (formData.name === '' || formData.name == null) {
      res2 = false;
      toast.warning('Please Enter Your Name', { transition: bounce });

    }
    if (formData.profession === '' || formData.profession == null) {
      res2 = false;
      toast.warning('Please Enter Your Profession', { transition: bounce });

    }
    if (formData.city === '' || formData.city == null) {
      res2 = false;
      toast.warning('Please Enter your City', { transition: bounce });

    }
    if (formData.attendeestate === '' || formData.attendeestate == null) {
      res2 = false;
      toast.warning('Please Enter Your State', { transition: bounce });

    }
    if (formData.pincode === '' || formData.pincode == null) {
      res2 = false;
      toast.warning('Please Enter Your Pincode', { transition: bounce });
    }


    if (res2) {
      nextStep();
    }
    return res2;
  }


  // const validatestep3 = () => {
  //   let res3 = true;

  //   if (formData.contact === '' || formData.contact == null) {
  //     res3 = false;
  //     toast.warning('Please Enter Contact', { transition: bounce });
  //   }



  //   if (res3) {
  //     nextStep();
  //   }

  //   return res3;
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    let respobj = {
      name: formData.name,
      profession: formData.profession,
      email: formData.email,
      attendeepassword: formData.attendeepassword,
      attendeecpassword: formData.attendeecpassword,
      contact: formData.contact,
      address: formData.address,
      city: formData.city,
      attendeestate: formData.attendeestate,
      pincode: formData.pincode,
      website: formData.website,
      ainstagram: formData.ainstagram,
      afacebook: formData.afacebook,
      alinkedin: formData.alinkedin,
      portfolio: formData.portfolio

    };
    if (validatestep1() && validatestep2())
      fetch('http://localhost:4000/attendee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(respobj)
      }).then((res) => {
        toast.success("Register Successfully", {
          position: toast.POSITION.TOP_CENTER
        });
        navigate('/attendeelogin')
      }).catch((err) => {
        toast.error("Registration Failed Due to: " + err.message);
      })

  }

  return (
    <div className="Attendee-form-container1">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="Attendee-form-subcontainer1">
            <div className="attendee-imagestep1">
              <img alt='attendee-imagestep1' src={attendeesignup1} />
            </div>
            <div className="Attendee-form-step1">

              <h2>Sign Up As a Attendee</h2>
              <label>Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                /></label>

              <label>Password
                <input
                  required
                  type={togglepass}
                  name="attendeepassword"
                  placeholder="Enter your Password"
                  value={formData.attendeepassword}
                  onChange={handleInputChange}
                />
                {visible ?
                  <AiFillEye onClick={() => { TogglePassword(); setVisible(!visible) }} /> :
                  <AiFillEyeInvisible onClick={() => { TogglePassword(); setVisible(!visible) }} />
                }</label>
              <label>Confirm Password
                <input
                  required
                  type={togglepass}
                  name="attendeecpassword"
                  placeholder="Confirm your Password"
                  value={formData.attendeecpassword}
                  onChange={handleInputChange}
                />
                {visible ?
                  <AiFillEye onClick={() => { TogglePassword(); setVisible(!visible) }} /> :
                  <AiFillEyeInvisible onClick={() => { TogglePassword(); setVisible(!visible) }} />
                }</label>

              <button type="button" onClick={validatestep1}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="attendee-imagestep2">
              <img alt='attendee-imagestep2'
                src={attendeesignup} />
            </div>
            <div className="Attendee-form-step2">
              <h2>Sign Up As a Attendee</h2>
              <label>Name
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>Profession
                <input
                  required
                  type="text"
                  name="profession"
                  placeholder="Eg..Web Developer, App Developer, Teacher, etc.."
                  value={formData.profession}
                  onChange={handleInputChange}
                /></label>
              <label>City
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="Enter your City"
                  value={formData.city}
                  onChange={handleInputChange}
                /></label>

              <label> State
                <select
                  required
                  type="text"
                  name="attendeestate"
                  onChange={handleInputChange}
                  value={formData.attendeestate}
                  onClick={() => setStateDropdown(stateDropdown)}
                >
                  {!stateDropdown && (
                    IndiaStates.map((drop, index) => {
                      return (
                        <option key={index}>{drop.title}</option>
                      )
                    }))}
                </select></label>


              <label>Pincode
                <input
                  required
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                /></label>

              <button type="button" className="attendee-previousbutton" onClick={prevStep}>
                Previous
              </button>
              <button type="button" className="attendee-nextbutton" onClick={validatestep2}>
                Next
              </button>
            </div>
          </div>

        )}
        {step === 3 && (
          <div>
            <div className="attendee-imagestep3">
              <img alt='attendee-imagestep3'
                src={links} />
            </div>
            <div className="Attendee-form-step3">

              <h2>Sign Up As a Attendee</h2>
              <label>Portfolio Link<input
                required
                type="text"
                name="portfolio"
                placeholder="Give Your Link to Know you better...."
                value={formData.portfolio}
                onChange={handleInputChange}
              /></label>
              <h3>More Links To Connect</h3>
              <label><AiFillInstagram />Instagram
                <input
                  type="text"
                  placeholder="Enter the Instagram Link"
                  name="ainstagram"
                  value={formData.ainstagram}
                  onChange={handleInputChange} />
              </label>
              <label>
                <AiFillFacebook />Facebook
                <input
                  type="text"
                  placeholder="Enter the Facebook Link"
                  name="afacebook"
                  value={formData.afacebook}
                  onChange={handleInputChange} />
              </label>
              <label>
                <AiFillLinkedin />LinkedIn<input
                  type="text"
                  placeholder="Enter the LinkedIn Link"
                  name="alinkedin"
                  value={formData.alinkedin}
                  onChange={handleInputChange} />
              </label>

              <button type="button" className="attendee-previousbutton" onClick={prevStep}>
                Previous
              </button>
              <button className="attendee-submitbutton" type="submit">
                Submit
              </button>

            </div>
          </div>
        )}

      </form>
      <ToastContainer transition={bounce} />
    </div>
  );
};

export default Signup;