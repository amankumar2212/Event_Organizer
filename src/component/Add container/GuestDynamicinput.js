import React, { useState } from 'react'

const GuestDynamicinput = () => {
    const [guest, setGuest] = useState([{ guestname: "", profession: "", description: "" }]);

    const handleaddguest = () => {
        setGuest([...guest, { guestname: "", profession: "", description: "" }]);
        console.log(guest);
    }


    const handleInputChangeGuest = (event, i) => {
        const { name, value } = event.target;
        const list = [...guest];
        list[i][name] = value;
        setGuest(guest);
    };


    const handleremoveguest = (i) => {
        const val = [...guest];
        val.splice(i, 1);
        setGuest(val);
    }

    return (

        <div className='form-group'>

            {
                guest.map((user, i) => {
                    return (
                        <div className='guest-group'>
                            <h2>Guest {i+1} Detail</h2>
                            <label>Guest Name:</label>
                            <input
                                type='text'
                                name='guestname'
                                placeholder='Guest Name'
                                value={guest.guestname}
                                onChange={e => { handleInputChangeGuest(e, i) }}
                                required
                            />
                            <label>Famous For/Designation/Profession:</label>
                            <input
                                type='text'
                                name='profession'
                                placeholder='Founder CEO, Blogger, Youtuber, Motivational Speaker, etc... '
                                value={guest.profession}
                                onChange={e => { handleInputChangeGuest(e, i) }}
                                required
                            />
                            <label>Desciption About Guest:</label>
                            <input
                                type='text'
                                name='description'
                                placeholder='Guest Achievements eg: Seminars taken, Judge in a Hackathon etc..'
                                value={guest.description}
                                onChange={e => { handleInputChangeGuest(e, i) }}
                                required
                            />

                            {
                                guest.length > 1 &&
                                <button className='removefield' type='button' onClick={() => { handleremoveguest(i) }}>Remove</button>
                            }

                            {
                                guest.length - 1 === i &&
                                <button className='addfield' type='button' onClick={handleaddguest}>+ Add More</button>
                            }

                        </div>


                    )

                })}

        </div>
    )




}

export default GuestDynamicinput

