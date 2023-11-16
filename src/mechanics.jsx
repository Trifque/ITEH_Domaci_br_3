import React from 'react'
import SingleMechanic from './singleMechanic'

const Mechanics = () => {
  const firstNameLastName = "PlaceholderFirstNameLastName";
  const age = "Age placeholder";
  const gender = "Gender placeholder";
  const employmentStatus = "Employment placeholder";
  const story = "Story placeholder";

  return (
    <div className='everyMechanic'>
      <SingleMechanic mechanicName={firstNameLastName} mechanicAge = {age} mechanicGender = {gender} mechanicEmploymentStatus = {employmentStatus} mechanicStory = {story}/>
      <SingleMechanic mechanicName={firstNameLastName} mechanicAge = {age} mechanicGender = {gender} mechanicEmploymentStatus = {employmentStatus} mechanicStory = {story}/>
      <SingleMechanic mechanicName={firstNameLastName} mechanicAge = {age} mechanicGender = {gender} mechanicEmploymentStatus = {employmentStatus} mechanicStory = {story}/>
      <SingleMechanic mechanicName={firstNameLastName} mechanicAge = {age} mechanicGender = {gender} mechanicEmploymentStatus = {employmentStatus} mechanicStory = {story}/>
      <SingleMechanic mechanicName={firstNameLastName} mechanicAge = {age} mechanicGender = {gender} mechanicEmploymentStatus = {employmentStatus} mechanicStory = {story}/>
      <SingleMechanic mechanicName={firstNameLastName} mechanicAge = {age} mechanicGender = {gender} mechanicEmploymentStatus = {employmentStatus} mechanicStory = {story}/>
    </div>
  )
}

export default Mechanics
