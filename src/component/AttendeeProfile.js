import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AttendeeProfile.css'
import { MdEditNote } from 'react-icons/md'
import AttendeeEvent from './AttendeeEvent';
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import ADS from 'aos'
import 'aos/dist/aos.css'

const AttendeeProfile = () => {
    useEffect(() => {
        ADS.init({ duration: 2500 });
    }, []);
    return (
        <div className='attendee-profile-container' data-aos="zoom-in">
            <div className='attendee-profile-title'>
                <div className='attendee-profile-image'>
                    <img src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' />
                </div>


                <div className='attendee-profile'>
                    <h1>Aman Kumar</h1>
                    <div className='attendee-profile-email'>
                        <p>Email : <span>aman.mail2212@gmail.com</span></p>
                    </div>
                    <div className='attendee-profile-profession'>
                        <p>Profession : <span>Software Developer Full Stack Developer</span></p>
                    </div>
                    <div className='attendee-profile-State'>
                        <p>State of Residence : <span>Delhi</span></p>
                    </div>
                    <div className='attendee-profile-pincode'>
                        <p>Pincode : <span>110071</span></p>
                    </div>

                </div>
            </div>

            <div className='attendee-social-links'>
                <h1>Social Handles</h1>
                <div className='attendee-portfolio-link'>
                    <Link to='https://www.google.com/'>
                        <p><span>Portfolio : </span>https://www.google.com/</p>
                    </Link>
                </div>
                <div className='attendee-facebook-link'>
                    <Link to='https://www.google.com/'>
                        <p> <span><AiFillFacebook />Facebook: </span>https://www.google.com/</p>
                    </Link></div>
                <div className='attendee-instgram-link'>
                    <Link to='https://www.google.com/'>
                        <p><span><AiFillInstagram />Instgram : </span>https://www.google.com/</p>
                    </Link></div>
                <div className='attendee-linkedin-link'>
                    <Link to='https://www.google.com/'>
                        <p><span><AiFillLinkedin />LinkedIn : </span>https://www.google.com/</p>
                    </Link></div>
            </div>

            <div className='attendee-profile-button'>
                <button type='submit'>
                    <MdEditNote /> Update Profile
                </button>
            </div>

            <div className='attendee-profile-event'>

                <div className='attendee-profile-eventstatus'>
                    <AttendeeEvent />
                </div>

            </div>
        </div>

    )
}

export default AttendeeProfile