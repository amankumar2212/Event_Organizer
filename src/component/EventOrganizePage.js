import React, { useEffect, useState } from 'react';
import './EventOrganizePage.css';
import IndiaStates from './states of india/IndiaStates';
import event from '../images/event.gif'
// import OrganizerDynamicinput from './Add container/OrganizerDynamicinput';
import SchduleDynamicinput from './Add container/ScheduleDynamicinput';
import GuestDynamicinput from './Add container/GuestDynamicinput';
import { InfinitySpin } from 'react-loader-spinner';
import { toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import { useNavigate } from "react-router-dom";

const EventOrganizePage = () => {

  const navigate = useNavigate();
  const [organizer, setOrganizer] = useState([{ organizername: "", contactnum: "" }]);        //Organizer
  const [loading, setLoading] = useState(false);
  const [stateDropdown, setStateDropdown] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventitle: "", eventmode: "", domain: "", sdate: "", eventcity: "",
    edate: "", eventstate: "", eventpincode: "",
    address: "", eventLocation: "", deadline: "", amount: "", member: "", eventtype: ""
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });

  //Organizer
  const handleaddorganizer = (i) => {
    setOrganizer([...organizer, { organizername: "", contactnum: "" }]);
    console.log(organizer);
  }

  const handleInputChangeOrganizer = (event, i) => {
    const list = [...organizer];
    list[i][event.target.name] = event.target.value;
    setOrganizer(organizer);

  };

  const handleremoveorganizer = (i) => {
    const val = [...organizer];
    val.splice(i, 1);
    setOrganizer(val);
    toast.success(`Organizer ${i + 1} has been Removed`, { transition: bounce })
  }
  const OrganizerInfo = (i) => {
    let res4 = true;
    if (organizer.organizername === '' || organizer.organizername == null) {
      res4 = false;
      toast.error(`Please Enter Organizer ${i + 1} Name`, { transition: bounce });

    }

    if (organizer.contactnum === '' || organizer.contactnum == null) {
      res4 = false;
      toast.error(`Please Enter  Organizer ${i + 1} Contact `, { transition: bounce });
    }

    return res4;
  }

  //Main
  const validatestep1 = () => {
    let res1 = true;

    if (formData.eventitle === '' || formData.eventitle == null) {
      res1 = false;
      toast.error('Please Enter your Event Title', { transition: bounce });

    }
    if (formData.eventmode === '' || formData.eventmode == null) {
      res1 = false;
      toast.error('Please Enter Mode of Event', { transition: bounce });

    }
    if (formData.domain === '' || formData.domain == null) {
      res1 = false;
      toast.error('Please Domain of Event', { transition: bounce });

    }
    if (formData.eventtype === '' || formData.eventtype == null) {
      res1 = false;
      toast.error('Please Enter Type of Event', { transition: bounce });
    }

    if (res1) {
      handleNext();
    }
    return res1;
  }

  const validatestep2 = () => {
    let res2 = true;
    if (formData.sdate === '' || formData.sdate == null) {
      res2 = false;
      toast.error('Please Enter Event Start Date', { transition: bounce });

    }
    if (formData.edate === '' || formData.edate == null) {
      res2 = false;
      toast.error('Please Enter Event End Date', { transition: bounce });

    }
    if (res2) {
      handleNext();
    }
    return res2;
  }

  const validatestep3 = () => {
    let res3 = true;
    if (formData.address === '' || formData.address == null) {
      res3 = false;
      toast.error('Please Enter your Address', { transition: bounce });

    }

    if (formData.eventstate === '' || formData.eventstate == null) {
      res3 = false;
      toast.error('Please Enter Your State', { transition: bounce });

    }
    if (formData.eventcity === '' || formData.eventcity == null) {
      res3 = false;
      toast.error('Please Enter your City', { transition: bounce });

    }
    if (formData.eventLocation === '' || formData.eventLocation == null) {
      res3 = false;
      toast.error('Please Enter Location Link', { transition: bounce });

    }
    if (res3) {
      handleNext();
    }

    return res3;
  }
  const validatestep4 = () => {
    let res4 = true;
    if (formData.deadline === '' || formData.deadline == null) {
      res4 = false;
      toast.error('Please Enter Registration Deadline', { transition: bounce });

    }

    if (formData.member === '' || formData.member == null) {
      res4 = false;
      toast.error('Please Enter Number of Members ', { transition: bounce });

    }
    if (formData.amount === '' || formData.amount == null) {
      res4 = false;
      toast.error('Please Enter Amount', { transition: bounce });

    }
    if (res4) {
      handleNext();
    }

    return res4;
  }



  const handleSubmitEvent = (e) => {
    e.preventDefault();

    let respobj = {
      eventitle: formData.eventitle, eventmode: formData.eventmode, domain: formData.domain, sdate: formData.sdate,
      edate: formData.edate, eventstate: formData.eventdate, eventpincode: formData.eventpincode,
      address: formData.address, eventLocation: formData.eventLocation, deadline: formData.deadline,
      amount: formData.amount, member: formData.member, eventtype: formData.eventtype,

    };
    const organizerArray = [];


    for (let i = 0; i < organizer.length; i++) {
      let objData = {
        organizername: organizer[i].organizername,
        contactnum: organizer[i].contactnum
      };
      organizerArray.push(objData);
    }

    if (validatestep1() && validatestep2() && validatestep3() && validatestep4()) {


      fetch('http://localhost:4000/eventdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(respobj, organizerArray)

      }).then((res) => {
        toast.success("Register Successfully", {
          position: toast.POSITION.TOP_CENTER
        });
        navigate('/collegelogin')
      }).catch((err) => {
        toast.error("Registration Failed Due to: " + err.message);
      })
    }

  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (

    <div className='event-organize'>
      {loading ?
        <div className='loader'>

          <InfinitySpin
            width='200'
            color="#4fa94d"
            margin-left='200'
            wrapperClassname='loader'
          />
        </div> :
        <div>
          <div className='eventgif'>
            <img alt='event' src={event} />
          </div>
          <div className='form-container'>
            <h2>Event Organizer Form</h2>
            <form>
              {step === 1 && (
                <div className='form-group'>
                  <h2>Event Details</h2>

                  <label>Event title</label>
                  <input
                    type='text'
                    placeholder='Enter Event Title'
                    name='eventitle'
                    value={formData.eventitle}
                    onChange={handleInputChange}
                    required
                  />

                  <label>Mode Of Event</label>
                  <select
                    type='text'
                    name='eventmode'
                    value={formData.eventmode}
                    onChange={handleInputChange}
                    required
                  >
                    <option>---Select Mode of Event------</option>
                    <option>Online</option>
                    <option>Offline</option>

                  </select>
                  <label>Type Of Event</label>
                  <select
                    type='text'
                    name='eventtype'
                    value={formData.eventtype}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=''>---Select Type of Event------</option>
                    <option value='Conference'>Conference</option>
                    <option value='Hackathon'>Hackathon</option>
                    <option value='Semina'>Seminar</option>
                    <option value='Workshop'>Workshop</option>

                  </select>

                  <label>Domain of the Event/Area Of Study</label>
                  <select
                    type='text'
                    name='domain'
                    value={formData.domain}
                    onChange={handleInputChange}
                    required>
                    <option value=''>---Select Field------</option>
                    <option value='Artificial Intelligence'>Artificial Intelligence</option>
                    <option value='Web Development'>Web Development</option>
                    <option value='Deep Learning'>Deep Learning</option>
                    <option value='Machine Learning '>Machine Learning </option>
                    <option value='Cloud Computing'>Cloud Computing</option>
                    <option value='Crypto'>Crypto</option>
                    <option value='Application Development'>Application Development</option>
                    <option value='Others'>Others</option>
                  </select>

                </div>
              )}
              {step === 2 && (
                <div className='form-group'>
                  <div className='eventdate'>
                    <h3>Date Of Event</h3>
                  </div>

                  <label>Start Date:</label>
                  <input
                    type='date'
                    name='sdate'
                    value={formData.sdate}
                    onChange={handleInputChange}
                    required
                  />
                  <label>End Date:</label>
                  <input
                    type='date'
                    name='edate'
                    value={formData.edate}
                    onChange={handleInputChange}
                    required
                  />
                  <h2>Session Detail</h2>
                  <div className='form-group2'>
                    <SchduleDynamicinput />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className='form-group'>
                  <h2> Organizer Detail</h2>
                  {
                    organizer.map((user, i) => {

                      return (
                        <div className='organizer-form'>
                          <h2>Organizer {i + 1}</h2>
                          <label>Organizer Name:</label>
                          <input
                            type='text'
                            name='organizername'
                            placeholder='Enter Organizer Name'
                            value={organizer.organizername}
                            onChange={e => { handleInputChangeOrganizer(e, i) }}
                            required
                          />
                          <label>Contact Number:</label>
                          <input
                            type='number'
                            name='contactnum'
                            placeholder='Enter Contact Number'
                            value={organizer.contactnum}
                            onChange={e => { handleInputChangeOrganizer(e, i) }}
                            required
                          />

                          {
                            organizer.length > 1 &&
                            <button className='removefield' type='button' onClick={() => { handleremoveorganizer(i); OrganizerInfo(i) }}>Remove</button>
                          }

                          {
                            organizer.length - 1 === i &&
                            <button className='addfield' type='button' onClick={handleaddorganizer}>+ Add More</button>
                          }

                        </div>

                      )
                    })}

                </div>
              )}
              {step === 4 && (
                <div className='form-group'>
                  <h2>Event Venue</h2>
                  <label>Address</label>
                  <input
                    type='text'
                    name='address'
                    placeholder='Building name, Stadium name, Auditrium, etc...'
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <label>City</label>
                  <input
                    type='text'
                    name='eventcity'
                    placeholder='Enter City'
                    value={formData.eventcity}
                    onChange={handleInputChange}
                    required
                  />
                  <label>State
                    <select
                      className='statedropdown4'
                      onClick={() => setStateDropdown(stateDropdown)}
                      onChange={handleInputChange}
                      required
                      type="text"
                      name="eventstate"
                      value={formData.eventstate}
                    >
                      {!stateDropdown && (
                        IndiaStates.map((menu, i) => {
                          return (
                            <option key={i}>{menu.title}</option>
                          )
                        }))}
                    </select>
                  </label>
                  <label>Pincode</label>
                  <input
                    type='number'
                    name='eventpincode'
                    placeholder='Enter Pincode'
                    value={formData.eventpincode}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Location Link</label>
                  <input
                    type='text'
                    name='eventLocation'
                    placeholder='Google maps Link'
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              {step === 5 && (
                <div className='form-group'>
                  <div className='form-group5'>
                    <GuestDynamicinput />
                  </div>

                </div>
              )}
              {step === 6 && (
                <div className='form-group'>
                  <h2>Registration Detail</h2>
                  <label>Registration Deadline:</label>
                  <input
                    type='date'
                    name='deadline'
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Registration Amount:</label>
                  <input
                    type='number'
                    name='amount'
                    placeholder='Regustration amount in INR'
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Team Members:</label>
                  <p1><strong>Put "0" if there is no team criteria</strong></p1>
                  <input
                    type='text'
                    name='member'
                    placeholder='Mo. of Team Members participating'
                    value={formData.member}
                    onChange={handleInputChange}
                    required
                  />

                </div>
              )}
              <div className='button-container'>
                {(step > 1 && step < 7) && (
                  <button type='button' className='previousbutton' onClick={handlePrev}>
                    Previous
                  </button>
                )}


                {step === 1 && (
                  <button type='button' className='nextbutton' onClick={validatestep1}>
                    Next
                  </button>
                )}
                {step === 2 && (
                  <button type='button' className='nextbutton' onClick={validatestep2}>
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button type='button' className='nextbutton' onClick={handleNext}>
                    Next
                  </button>
                )}
                {step === 4 && (
                  <button type='button' className='nextbutton' onClick={validatestep3}>
                    Next
                  </button>
                )}
                {step === 5 && (
                  <button type='button' className='nextbutton' onClick={handleNext}>
                    Next
                  </button>
                )}

                {step === 6 && <button className='submitbutton' type='submit'
                  onClick={() => { validatestep4(); handleSubmitEvent() }} >
                  Submit
                </button>}
              </div>
            </form>
          </div>
        </div>
      }
    </div>

  );
};

export default EventOrganizePage
