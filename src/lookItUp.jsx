import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

function LookItUp() {
  return (
    <div className='lookItUp'>
      <a><FaSearch style={{ marginRight: 100 }}/></a>
      <a>Mechanical Meetup</a>
      <a><MdGroup style={{ marginLeft: 100 }}/></a>
    </div>
  )
}

export default LookItUp
