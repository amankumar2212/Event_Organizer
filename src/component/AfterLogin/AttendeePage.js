import React from 'react'
import './AttendeePage.css'

const AttendeePage = () => {
  return (
    <div className="attendee-post">
      <div className='filter-container'>
        <h3>Filters</h3>
        <div className='event-input'>
          <label>Type of Event
            <select>
              <option >---Select Type of Event---</option>
              <option >Conference</option>
              <option >Workshop</option>
              <option >Hackathon</option>
              <option >Seminar</option>
            </select>
          </label>
        </div>

        <div className='event-field'>
          <label>Domain of the Event
            <select>
              <option >---Select Area/domain---</option>
              <option>Artificial Intelligence</option>
              <option>Web Development</option>
              <option>Deep Learning</option>
              <option>Machine Learning </option>
              <option>Cloud Computing</option>
              <option>Crypto</option>
              <option>Application Development</option>
              <option>Others</option>
            </select>
          </label>
        </div>
        <button className='apply-button' type='submit'>Apply Filters</button>
        <button className='reset-button' type='submit'>Reset</button>

      </div>

      <div className='main-post'>
        <h1>Conferences</h1>
        <div className='post'>
          <div className='post-heading'>
            8th International Conference on Computing for Sustainable Global Development (INDIACom)
          </div>
          <div className='post-date '><span>Date of Event :</span>  27th & 28th July, 2020
          </div>
          <div className='post-button'>
            <button type='submit'>View Details</button>
          </div>
        </div>

        <div className='post'>
          <div className='post-heading'>
            8th International Conference on Computing for Sustainable Global Development (INDIACom)
          </div>
          <div className='post-date '><span>Date of Event :</span>  27th & 28th July, 2020
          </div>
          <div className='post-button'>
            <button type='submit'>View Details</button>
          </div>
        </div>

        <div className='post'>
          <div className='post-heading'>
            8th International Conference on Computing for Sustainable Global Development (INDIACom)
          </div>
          <div className='post-date '><span>Date of Event :</span>  27th & 28th July, 2020
          </div>
          <div className='post-button'>
            <button type='submit'>View Details</button>
          </div>
        </div>

        <div className='post'>
          <div className='post-heading'>
            8th International Conference on Computing for Sustainable Global Development (INDIACom)
          </div>
          <div className='post-date '><span>Date of Event :</span>  27th & 28th July, 2020
          </div>
          <div className='post-button'>
            <button type='submit'>View Details</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AttendeePage