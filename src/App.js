import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'
import UserLogin from './component/AttendeeLogin'
import CollegeLogin from './component/CollegeLogin'
import Navbar from './component/Navbar/Navbar'
import EventOrganizePage from './component/EventOrganizePage'
import Conference from './component/Events/Conference'
import Hackathon from './component/Events/Hackathon'
import Workshop from './component/Events/Workshop'
import Seminar from './component/Events/Seminar'
import AttendeeSignup from './component/Signup/AttendeeSignup'
import CollegeSignup from './component/Signup/CollegeSignup'
import CollegeProfile from './component/CollegeProfile'
import AttendeeProfile from './component/AttendeeProfile'
import Attendee from './component/AfterLogin/AttendeePage'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/attendeelogin' element={<UserLogin />} />
          <Route path='/collegelogin' element={<CollegeLogin />} />
          <Route path='/collegesignup' element={<CollegeSignup />} />
          <Route path='/attendeesignup' element={<AttendeeSignup />} />
          <Route path='/eventorganize' element={<EventOrganizePage />} />
          <Route path='/conference' element={<Conference />} />
          <Route path='/hackathon' element={<Hackathon />} />
          <Route path='/workshop' element={<Workshop />} />
          <Route path='/seminar' element={<Seminar />} />
          <Route path='/collegeprofile' element={<CollegeProfile />} />
          <Route path='/attendeeprofile' element={<AttendeeProfile />} />
          <Route path='/attendee' element={<Attendee />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App