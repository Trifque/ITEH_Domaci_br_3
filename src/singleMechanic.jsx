import React from 'react'

const SingleMechanic = () => {
  return (
    <div className='mechanicRectangle'>
      <img className='mechanicRectangleProfilePicture' src="https://i1.sndcdn.com/avatars-000787434634-i9sqvl-t240x240.jpg" alt="Random pic"/>
      <div className='mechanicRectagleBio'>
        <h3 className='mechanicRectangleFirstNameLastName'>NameHolder</h3>
        <div className='mechanicRectangleGeneralInfo'>
            <p className='mechanicRectangleGeneralInfoAge'>AgeHolder</p>
            <p className='mechanicRectangleGeneralInfoGender'>GenderHolder</p>
            <p className='mechanicRectangleGeneralInfoEmploymentStatus'>EmploymentHolder</p>
            <p className='mechanicRectagleBioShortStory'>ShortStoryHolder</p>
        </div>
      </div>
      <div className='mechanicRectangleInteraction'>
        <a className='btn btn-green'>Befriend</a>
        <a className='btn btn-red'>Declare Rival</a>
      </div>
    </div>
  )
}

export default SingleMechanic
