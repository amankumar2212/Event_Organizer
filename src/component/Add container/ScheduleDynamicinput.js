import React, { useState } from 'react'

const SchduleDynamicinput = () => {

    const [schedule, setSchedule] = useState([{ sessionname: "", sdate: "", stime: "" }]);


    const handleaddschedule = () => {
        setSchedule([...schedule, { sessionname: "", sdate: "", stime: "" }]);
        console.log(schedule);
    }

    const handleInputChangeSchedule = (event, i) => {
        const { name, value } = event.target;
        const list = [...schedule];
        list[i][name] = value;
        setSchedule(schedule);
    };

    const handleremoveschedule = (i) => {
        const val = [...schedule];
        val.splice(i, 1);
        setSchedule(val);
    }


    return (

        <div className='form-group'>

            {
                schedule.map((user, i) => {
                    return (
                        <div className='schedule-group'>
                            <h2>Session {i + 1}</h2>
                            <label>Session Name:</label>
                            <input
                                type='text'
                                name='sessionname'
                                placeholder='Session Name eg: Inaugration, Lecture, Panel Discussion, etc...'
                                value={schedule.sessionname}
                                onChange={e => { handleInputChangeSchedule(e, i) }}
                                required
                            />
                            <label>Date:</label>
                            <input
                                type='date'
                                name='sdate'
                                value={schedule.sdate}
                                onChange={e => { handleInputChangeSchedule(e, i) }}
                                required
                            />
                            <label>Time:</label>
                            <input
                                type='time'
                                name='stime'
                                value={schedule.stime}
                                onChange={e => { handleInputChangeSchedule(e, i) }}
                                required
                            />

                            {
                                schedule.length > 1 &&
                                <button className='removefield' type='button' onClick={() => { handleremoveschedule(i) }}>Remove</button>
                            }

                            {
                                schedule.length - 1 === i &&
                                <button className='scheduleaddfield' type='button' onClick={handleaddschedule}>+ Add More Sessions</button>
                            }
                        </div>



                    )

                })}
        </div>

    )




}

export default SchduleDynamicinput

