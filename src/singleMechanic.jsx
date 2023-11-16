import React from 'react'

const SingleMechanic = ({mechanicName, mechanicAge, mechanicGender, mechanicEmploymentStatus, mechanicStory}) => {
  return (
    <div className='mechanicRectangle'>
      <img className='mechanicRectangleProfilePicture' src="https://i1.sndcdn.com/avatars-000787434634-i9sqvl-t240x240.jpg" alt="Random pic"/>
      <div className='mechanicRectagleBio'>
        <h3 className='mechanicRectangleFirstNameLastName'>{mechanicName}</h3>
        <div className='mechanicRectangleGeneralInfo'>
            <p className='mechanicRectangleGeneralInfoAge'>{mechanicAge}</p>
            <p className='mechanicRectangleGeneralInfoGender'>{mechanicGender}</p>
            <p className='mechanicRectangleGeneralInfoEmploymentStatus'> {mechanicEmploymentStatus}</p>
            <p className='mechanicRectagleBioShortStory'>{mechanicStory}</p>
        </div>
      </div>
      <div className='mechanicRectangleInteraction'>
        <a className='btn btn-green'>Invite to outing</a>
        <a className='btn btn-red'>Uninvite to outing</a>
      </div>
    </div>
  )
}

export default SingleMechanic
