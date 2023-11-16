import React from 'react'

const SingleMechanic = ({ mechanic, onAdd, onRemove }) => {

  return (
    <div className='mechanicRectangle'>
      <img className='mechanicRectangleProfilePicture' src="https://i1.sndcdn.com/avatars-000787434634-i9sqvl-t240x240.jpg" alt="Random pic"/>
      <div className='mechanicRectangleBio'>
        <h3 className='mechanicRectangleFirstNameLastName'>{mechanic.firstNameLastName}</h3>
        <div className='mechanicRectangleGeneralInfo'>
            <p className='mechanicRectangleGeneralInfoAge'>{mechanic.age}</p>
            <p className='mechanicRectangleGeneralInfoGender'>{mechanic.gender}</p>
            <p className='mechanicRectangleGeneralInfoEmploymentStatus'> {mechanic.employmentStatus}</p>
            <p className='mechanicRectagleBioShortStory'>{mechanic.shortStory}</p>
        </div>
      </div>
      <div className='mechanicRectangleInteraction'>
        <a className='btn btn-green' onClick={() => onAdd(mechanic.id)}>Invite to outing</a>
        <a className='btn btn-red' onClick={() => onRemove(mechanic.id)}>Uninvite to outing</a>
      </div>
    </div>
  )
}

export default SingleMechanic
