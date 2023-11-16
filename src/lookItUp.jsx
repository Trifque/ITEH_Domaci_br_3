import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";

function LookItUp({numberOfInvitedPeople}) {
  return (
    <div className='lookItUp'>
      <Link to="/"><FaSearch style={{ marginRight: 100 }}/></Link>
      <a>Mechanical Meetup</a>
      <Link to="/listOfInvitedPeople"><MdGroup style={{ marginLeft: 100 }}/></Link>
      <div className='numberOfInvitedPeople'>{numberOfInvitedPeople}</div>
    </div>
  )
}

export default LookItUp
