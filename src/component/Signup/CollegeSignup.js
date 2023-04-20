import React, { useState } from "react";
import './CollegeSignup.css'
import links from '../../images/links.gif'
import address from '../../images/address.gif'
import collegeinfo from '../../images/collegeinfo.gif'
import collegesignup1 from '../../images/collegesignup1.gif'
import IndiaStates from '../states of india/IndiaStates'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import { useNavigate } from "react-router-dom";

const CollegeSignup = () => {
  const navigate = useNavigate();
  const [togglepass, setTogglepass] = useState("password");
  const [visible, setVisible] = useState('');
  const [stateDropdown, setStateDropdown] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    collegename: "",
    headname: "",
    id: "",
    collegepassword: "",
    collegecpassword: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    website: "",
    cinstagram: "",
    clinkedin: "",
    cfacebook: ""
  });



  const nextStep = () => {
    setStep(step + 1);
  }
  const prevStep = () => {
    setStep(step - 1);
  };

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });
  // const fullValidate = () => {
  //   let result1 = true;
  //   let result2 = true;
  //   let result3 = true;
  //   //step1
  //   if (formData.id === '' || formData.id == null) {
  //     result1 = false;
  //     toast.warning('Please Enter your Email', {
  //       position: toast.POSITION.TOP_CENTER
  //     });

  //   }
  //   if (formData.collegepassword === '' || formData.collegepassword == null) {
  //     result1 = false;
  //     toast.warning('Please Enter Password', {
  //       position: toast.POSITION.TOP_CENTER
  //     });

  //   }
  //   if (formData.collegecpassword === '' || formData.collegecpassword == null) {
  //     result1 = false;
  //     toast.warning('Please Repeat Password', {
  //       position: toast.POSITION.TOP_CENTER
  //     });

  //   }
  //   if (formData.collegecpassword !== formData.collegepassword) {
  //     result1 = false;
  //     toast.warning('Password Does Not Match', {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //   }
  //   else {
  //     result1 = true;

  //   }

  //   if(result1) {
  //     nextStep();
  //   }

  //   //step2
  //   if (formData.collegename === '' || formData.collegename == null) {
  //     result2 = false;
  //     toast.warning('Please Enter College Name');

  //   }
  //   if (formData.headname === '' || formData.headname == null) {
  //     result2 = false;
  //     toast.warning('Please Enter College Head Name ');

  //   }
  //   if (formData.contact === '' || formData.contact == null) {
  //     result2 = false;
  //     toast.warning('Please Enter Contact');

  //   }

  //   if (result2) {
  //     nextStep();
  //   }
  //   //step3
  //   if (formData.address === '' || formData.address == null) {
  //     result3 = false;
  //     toast.warning('Please Enter your Address');

  //   }
  //   if (formData.city === '' || formData.city == null) {
  //     result3 = false;
  //     toast.warning('Please Enter your City');

  //   }
  //   if (formData.state === '' || formData.state == null) {
  //     result3 = false;
  //     toast.warning('Please Enter Your State');

  //   }
  //   if (formData.pincode === '' || formData.pincode == null) {
  //     result3 = false;
  //     toast.warning('Please Enter Your Pincode');

  //   }
  //   if (result3) {
  //     nextStep();
  //   }
  // }

  const validatestep1 = () => {
    let res1 = true;

    if (formData.id === '' || formData.id == null) {
      res1 = false;
      toast.warning('Please Enter your Email', { transition: bounce });

    }
    if (formData.collegepassword === '' || formData.collegepassword == null) {
      res1 = false;
      toast.warning('Please Enter Password', { transition: bounce });

    }
    if (formData.collegecpassword === '' || formData.collegecpassword == null) {
      res1 = false;
      toast.warning('Please Repeat Password', { transition: bounce });

    }
    if (formData.collegecpassword !== formData.collegepassword) {
      res1 = false;
      toast.warning('Password Does Not Match', { transition: bounce });
    }

    if (res1) {
      nextStep();
    }
    return res1;
  }

  const validatestep2 = () => {
    let res2 = true;
    if (formData.collegename === '' || formData.collegename == null) {
      res2 = false;
      toast.warning('Please Enter College Name', { transition: bounce });

    }
    if (formData.headname === '' || formData.headname == null) {
      res2 = false;
      toast.warning('Please Enter College Head Name', { transition: bounce });

    }
    if (formData.contact === '' || formData.contact == null) {
      res2 = false;
      toast.warning('Please Enter Contact', { transition: bounce });
    }


    if (res2) {
      nextStep();
    }
    return res2;
  }


  const validatestep3 = () => {
    let res3 = true;
    if (formData.address === '' || formData.address == null) {
      res3 = false;
      toast.warning('Please Enter your Address', { transition: bounce });

    }
    if (formData.city === '' || formData.city == null) {
      res3 = false;
      toast.warning('Please Enter your City', { transition: bounce });

    }
    if (formData.state === '' || formData.state == null) {
      res3 = false;
      toast.warning('Please Enter Your State', { transition: bounce });

    }
    if (formData.pincode === '' || formData.pincode == null) {
      res3 = false;
      toast.warning('Please Enter Your Pincode', { transition: bounce });
    }

    if (res3) {
      nextStep();
    }

    return res3;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let respobj = {

      collegename: formData.collegename,
      headname: formData.headname,
      id: formData.id,
      collegepassword: formData.collegepassword,
      collegecpassword: formData.collegecpassword,
      contact: formData.contact,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      website: formData.website,
      cinstagram: formData.cinstagram,
      clinkedin: formData.clinkedin,
      cfacebook: formData.cfacebook

    };
    if (validatestep1() && validatestep2() && validatestep3())
      fetch('http://localhost:4000/collegesignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(respobj)
      }).then((res) => {
        toast.success("Register Successfully", {
          position: toast.POSITION.TOP_CENTER
        });
        navigate('/collegelogin')
      }).catch((err) => {
        toast.error("Registration Failed Due to: " + err.message);
      })

  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const TogglePassword = () => {
    if (togglepass === "password")
      return setTogglepass("text");
    setTogglepass("password");
  }

  return (
    <div className="College-form-container1">
      <form >
        {step === 1 && (
          <div>
            <div className="college-imagestep1">
              <img alt='college-imagestep1'
                src={collegesignup1} />
            </div>
            <div className="College-form-step1">
              <h2>Sign Up As a College</h2>
              <label>Email
                <input
                  required
                  type="email"
                  name="id"
                  placeholder="College Email"
                  value={formData.id}
                  onChange={handleInputChange}
                /></label>
              <label>Password
                <input
                  required
                  type={togglepass}
                  name="collegepassword"
                  placeholder="Enter Your Password"
                  value={formData.collegepassword}
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
                  name="collegecpassword"
                  placeholder="Confirm Your Password"
                  value={formData.collegecpassword}
                  onChange={handleInputChange}
                />

                {visible ?
                  <AiFillEye onClick={() => { TogglePassword(); setVisible(!visible) }} /> :
                  <AiFillEyeInvisible onClick={() => { TogglePassword(); setVisible(!visible) }} />
                }</label>

              <button onClick={validatestep1} type="button" >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="college-imagestep2">
              <img alt='college-imagestep2'
                src={collegeinfo} />
            </div>
            <div className="College-form-step2">

              <h2>Sign Up As a College</h2>
              <label>College Name
                <input
                  required
                  type="text"
                  name="collegename"
                  placeholder="College Name"
                  value={formData.collegename}
                  onChange={handleInputChange}
                /></label>
              <label>Official Head Name
                <input
                  required
                  type="text"
                  name="headname"
                  placeholder="Official Head Name"
                  value={formData.headname}
                  onChange={handleInputChange}
                /></label>

              <label>Contact
                <input
                  required
                  type="number"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                /></label>
              <button type="button" className="college-previousbutton" onClick={prevStep}>
                Previous
              </button>
              <button type="button" className="college-nextbutton" onClick={validatestep2}>
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="college-imagestep3">
              <img alt='college-imagestep3'
                src={address} />
            </div>
            <div className="College-form-step3">
              <h2>Sign Up As a College</h2>
              <label>Address
                <input
                  required
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>
              <label>City
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                /></label>

              <label> State
                <select
                  required
                  type="text"
                  name="state"
                  onChange={handleInputChange}
                  value={formData.state}
                  onClick={() => setStateDropdown(stateDropdown)}
                >
                  {!stateDropdown && (
                    IndiaStates.map((drop, index) => {
                      return (
                        <option key={index}>{drop.title}</option>
                      )
                    }))}
                </select>
              </label>


              <label>Pincode
                <input
                  required
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                /></label>
              <button type="button" className="college-previousbutton" onClick={prevStep}>
                Previous
              </button>
              <button type="button" className="college-nextbutton" onClick={validatestep3}>
                Next
              </button>

            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="college-imagestep4">
              <img alt='college-imagestep4'
                src={links} />
            </div>
            <div className="College-form-step4">

              <h2>Sign Up As a College</h2>
              <label>Website Link<input
                required
                type="text"
                name="website"
                placeholder="Enter Website Link"
                value={formData.website}
                onChange={handleInputChange}
              /></label>
              <label><AiFillInstagram />Instagram<input
                type="text" placeholder="Enter the Instagram Link" name="cinstagram" value={formData.cinstagram} onChange={handleInputChange} /></label>
              <label><AiFillFacebook />Facebook<input
                type="text" placeholder="Enter the Facebook Link" name="cfacebook" value={formData.cfacebook} onChange={handleInputChange} /></label>
              <label><AiFillLinkedin />LinkedIn<input
                type="text" placeholder="Enter the LinkedIn Link" name="clinkedin" value={formData.clinkedin} onChange={handleInputChange} /></label>


              <button type="button" className="college-previousbutton" onClick={prevStep}>
                Previous
              </button>
              <button onClick={handleSubmit} className="college-submitbutton" type="submit">Submit</button>
            </div>
          </div>
        )}
      </form>
    
    </div>
  );
};

export default CollegeSignup;