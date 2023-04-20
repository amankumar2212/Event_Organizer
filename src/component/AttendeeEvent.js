import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Event Attended`,
        children:
            <div className='attendee-profile-post'>

                <div className='attendee-main-post'>
                    <div className='attendee-profile-post-heading'>
                        National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                    </div>
                    <div className='attendee-profile-post-date '><span>Date of Event :</span>  27th & 28th July, 2020
                    </div>
                    <div className='attendee-profile-post-button'>
                        <button type='submit'>View Details</button>
                    </div>
                </div>

                <div className='attendee-main-post'>
                    <div className='attendee-profile-post-heading'>
                        National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                    </div>
                    <div className='attendee-profile-post-date '><span>Date of Event :</span>  27th & 28th July, 2020
                    </div>
                    <div className='attendee-profile-post-button'>
                        <button type='submit'>View Details</button>
                    </div>
                </div>

                <div className='attendee-main-post'>
                    <div className='attendee-profile-post-heading'>
                        National E-Conference on Recent and enhancements in Science & Technology (NECRAST 2020)
                    </div>
                    <div className='attendee-profile-post-date '><span>Date of Event :</span>  27th & 28th July, 2020
                    </div>
                    <div className='attendee-profile-post-button'>
                        <button type='submit'>View Details</button>
                    </div>
                </div>

            </div>,
    },
    {
        key: '2',
        label: `Upcoming Event`,
        children:
            <div className='attendee-profile-post'>

                <div className='attendee-main-post'>
                    <div className='attendee-profile-post-heading'>
                        8th International Conference on Computing for Sustainable Global Development (INDIACom)
                    </div>
                    <div className='attendee-profile-post-date'><span>Date of Event :</span>  27th & 28th July, 2020
                    </div>
                    <div className='attendee-profile-post-button'>
                        <button type='submit'>View Details</button>
                    </div>
                </div>

                <div className='attendee-main-post'>
                    <div className='attendee-profile-post-heading'>
                        8th International Conference on Computing for Sustainable Global Development (INDIACom)
                    </div>
                    <div className='attendee-profile-post-date '>
                        <span>Date of Event :</span>  27th & 28th July, 2020
                    </div>
                    <div className='attendee-profile-post-button'>
                        <button type='submit'>View Details</button>
                    </div>
                </div>

                <div className='attendee-main-post'>
                    <div className='attendee-profile-post-heading'>
                        8th International Conference on Computing for Sustainable Global Development (INDIACom)
                    </div>
                    <div className='attendee-profile-post-date '><span>Date of Event :</span>  27th & 28th July, 2020
                    </div>
                    <div className='attendee-profile-post-button'>
                        <button type='submit'>View Details</button>
                    </div>
                </div>

            </div>,
    },

];

const AttendeeEvent: React.FC = () =>
    <Tabs defaultActiveKey="1" centered size='large' items={items} onChange={onChange} />;

export default AttendeeEvent;
