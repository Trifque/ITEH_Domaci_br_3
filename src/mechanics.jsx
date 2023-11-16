import React from 'react'
import SingleMechanic from './singleMechanic'

const Mechanics = ({mechanics, onAdd, onRemove}) => {

  return (
    <div className='everyMechanic'>
      {mechanics.map((mechanic) => (
        <SingleMechanic key={mechanic.id} mechanic={mechanic} onAdd={onAdd} onRemove={onRemove}/>
      ))}
    </div>
  )
}

export default Mechanics
