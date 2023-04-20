import React, { useEffect } from 'react'
import './Home.css'
import gif from '../images/homepage.gif'
import { Link } from 'react-router-dom'
import ADS from 'aos'
import 'aos/dist/aos.css'
import { FaCashRegister } from 'react-icons/fa'


const Home = () => {
    useEffect(() => {
        ADS.init({ duration: 2500 });
    }, []);


    return (
        <div className='homepage'>
            <div className='home-top'>
                <div className='mainheading'>
                    <h2>Welcome  To  Event  Organizer</h2>
                </div>
                <div className='heading' data-aos='flip-right'>
                    <h1>Register Now to Participate in</h1>
                    <ul>
                        <li><span>Conference</span></li>
                        <li><span>Hackathon</span></li>
                        <li><span>Seminars</span></li>
                        <li><span>Workshop</span></li>
                    </ul>
                </div>
                <div className='register-button' data-aos='zoom-in'>
                    <Link to='/attendeesignup'>
                        <button type='submit'><FaCashRegister />    Register Here </button>
                    </Link>
                </div>

                <div className='gif' data-aos='zoom-in'>
                    <img alt='gif' src={gif} />
                </div>
            </div>
            <div className='event-container'>
                <div className='conference' data-aos="fade-up">
                    <div className='confcontent' data-aos="fade-left">
                        <h2>Conference</h2>
                        <p>The meeting of two personalities is like the contact of two chemical substances:
                            if there is any reaction, both are transformed.</p>
                        <Link to='/conference'>
                            <button type='submit' className='confbutton'>Explore</button>
                        </Link>
                    </div>
                    <div className='confimage' data-aos="fade-right">
                        <img src='https://cdn.stemcell.com/media/images/social/conferences.jpg' alt='' />
                    </div>
                </div>

                <div className='hackathon' data-aos="fade-up">
                    <div className='hackimage' data-aos="fade-right">
                        <img src='https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress.jpg' alt='' />
                    </div>
                    <div className='hackcontent' data-aos="fade-left">
                        <h2>Hackathon</h2>
                        <p>“Hacking” around means on the one hand to learn new technologies and possibilities you
                            missed before and on the other hand to use well known technologies in a different way. </p>
                        <Link to='/hackathon'>
                            <button type='submit' className='hackbutton'>Explore</button>
                        </Link>
                    </div>
                </div>

                <div className='seminar' data-aos="fade-up">
                    <div className='semicontent' data-aos="fade-left">
                        <h2>Seminar</h2>
                        <p>A seminar is an educational event in which a group of people gather together to learn more about a certain topic or subject. Seminars usually
                            involve presentations, discussions, and interactive activities that help attendees get more knowledgeable.</p>
                        <Link to='/seminar'>
                            <button type='submit' className='semibutton'>Explore</button>
                        </Link>
                    </div>
                    <div className='semimage' data-aos="fade-right">
                        <img src=' https://thumbs.dreamstime.com/b/coaching-mentoring-seminar-meeting-conference-business-concept-60792479.jpg' alt='' />
                    </div>
                </div>

                <div className='workshop' data-aos="fade-up">
                    <div className='workimage' data-aos="zoom-in">
                        <img src='https://www.collaboard.app/hubfs/website-theme-assets/Blog/brainstormingtips2.jpg' alt='' />
                    </div>
                    <div className='workcontent' data-aos="flip-right">
                        <h2>Workshop</h2>
                        <p>A workshop is a period of discussion or practical work on a particular
                            subject in which a group of people share their knowledge or experience.</p>
                        <Link to='/workshop'>
                            <button type='submit' className='workbutton'>Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
     
        </div>
    )
}

export default Home