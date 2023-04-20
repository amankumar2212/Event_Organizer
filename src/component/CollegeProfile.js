import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CollegeProfile.css'
import { ImLocation } from 'react-icons/im'
import ADS from 'aos'
import 'aos/dist/aos.css'

const Post = () => {
    useEffect(() => {
        ADS.init({ duration: 2500 });
    }, []);
    return (
        <div className='main-profile' data-aos="flip-right">
            <div className='profile-container'>
                <div className='profile-image'>
                    <img src='https://clgonline.in//static/all_collages/img/dr-akhilesh-das-gupta-institute-of-technology-and-management-new-delhi.jpg' alt='cimage' />
                </div>

                <h1>Dr. Akhilesh Das Gupta Institute Of Technology and Management</h1>
                <div className='profile-email'>
                    <p><span>support@adgitm.com</span></p>
                </div>
                <div className='profile-location'>
                    <p> <span><ImLocation /></span> New Delhi, Delhi</p>
                </div>
                <div className='profile-website'>
                    <Link to='https://adgitmdelhi.ac.in/'>Website : <span>https://adgitmdelhi.ac.in/</span></Link>
                </div>
                <div className='profile-orgbutton'>
                    <Link to='/eventorganize'>
                        <button type='submit'>Organize An Event</button>
                    </Link>

                </div>
            </div>

            <div className='profile-about'>
                <h1>About</h1>
                <div className='profile-about-border'>
                </div>
                <div className='profile-address'>
                    <p>Address :<span> FC-26 Shastri Park, New Delhi-110053</span></p>
                </div>

                <div className='profile-headname'>
                    <p>Head Name : <span>Dr. Sanjay Kumar</span></p>
                </div>
                <div className='profile-contact'>
                    <p>Contact Number : <span>011-4990 5900</span></p>
                </div>

                <div className='profile-affiliated'>
                    <p>Affliiated By : <span>Guru Gobind Singh Indraprastha  University (GGSIPU)</span></p>
                </div>
            </div>

            <div className='profile-events'>
                <div className='profile-event-heading'>
                    <div className='profile-event-status'>
                        <p>Past Events</p>
                        <p>Upcoming Events</p>
                    </div>
                    <div className='profile-border'></div>

                    <div className='profile-post-container'>

                        <div className='profile-post'>
                            <div className='profile-post-heading'>National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                            </div>
                            <div className='profile-post-date'><span>Date of Event :</span>  27th & 28th July, 2020
                            </div>
                            <div className='profile-post-button'>
                                <button type='submit'>View Details</button>
                            </div>
                        </div>

                        <div className='profile-post'>
                            <div className='profile-post-heading'>National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                            </div>
                            <div className='profile-post-date'><span>Date of Event :</span>  27th & 28th July, 2020
                            </div>
                            <div className='profile-post-button'>
                                <button type='submit'>View Details</button>
                            </div>
                        </div>

                        <div className='profile-post'>
                            <div className='profile-post-heading'>National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                            </div>
                            <div className='profile-post-date'><span>Date of Event :</span>  27th & 28th July, 2020
                            </div>
                            <div className='profile-post-button'>
                                <button type='submit'>View Details</button>
                            </div>
                        </div>

                        <div className='profile-post'>
                            <div className='profile-post-heading'>National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                            </div>
                            <div className='profile-post-date'><span>Date of Event :</span>  27th & 28th July, 2020
                            </div>
                            <div className='profile-post-button'>
                                <button type='submit'>View Details</button>
                            </div>
                        </div>

                        <div className='profile-post'>
                            <div className='profile-post-heading'>National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                            </div>
                            <div className='profile-post-date'><span>Date of Event :</span>  27th & 28th July, 2020
                            </div>
                            <div className='profile-post-button'>
                                <button type='submit'>View Details</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post