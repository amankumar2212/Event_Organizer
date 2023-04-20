import React, { useState } from 'react'

import { ToastContainer, toast, cssTransition } from 'react-toastify';

const OrganizerDynamicinput = () => {

    const [organizer, setOrganizer] = useState([{ organizername: "", contactnum: "" }]);

    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut"
    });

    const handleaddorganizer = (i) => {
        setOrganizer([...organizer, { organizername: "", contactnum: "" }]);
        console.log(organizer);
    }

    const handleInputChangeOrganizer = (event, i) => {
        const { name, value } = event.target;
        const list = [...organizer];
        list[i][name] = value;
        setOrganizer(organizer);

    };

    const handleremoveorganizer = (i) => {
        const val = [...organizer];
        val.splice(i, 1);
        setOrganizer(val);
        toast.success(`Organizer ${i + 1} has been Removed`, { transition: bounce })
    }
    // const validatestep = (i) => {
    //     let res4 = true;
    //     if (organizer.organizername === '' || organizer.organizername == null) {
    //         res4 = false;
    //         toast.error(`Please Enter Organizer ${i + 1} Name`, { transition: bounce });

    //     }

    //     if (organizer.contactnum === '' || organizer.contactnum == null) {
    //         res4 = false;
    //         toast.error(`Please Enter  Organizer ${i + 1} Contact `, { transition: bounce });
    //     }

    //     return res4;
    // }
    // const handleSubmitOrganizer = (e) => {
    //     e.preventDefault();
    //     let respobj = {

    //         organizername: organizer.organizername, contactnum: organizer.contactnum
    //     };
    //     if (validatestep()) {
    //         fetch('http://localhost:4000/eventdetails', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(respobj)
    //         }).then((res) => {
    //             toast.success("Register Successfully", {
    //                 position: toast.POSITION.TOP_CENTER
    //             });
    //             // navigate('/collegelogin')
    //         }).catch((err) => {
    //             toast.error("Registration Failed Due to: " + err.message);
    //         })
    //     }
    // }
    return (

        <div className='form-group'>

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
                                <button className='removefield' type='button' onClick={() => { handleremoveorganizer(i) }}>Remove</button>
                            }

                            {
                                organizer.length - 1 === i &&
                                <button className='addfield' type='button' onClick={handleaddorganizer}>+ Add More</button>
                            }

                        </div>

                    )
                })}

            <ToastContainer transition={bounce} />
        </div>

    )
}
export default OrganizerDynamicinput
