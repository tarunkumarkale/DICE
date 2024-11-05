import React from 'react'
import { CiTrash } from "react-icons/ci";

const Card = ({task,trash}) => {
  return (
    <div className='flex flex-col'>
  
      <ul><li>{task} <button onClick={trash}><CiTrash /></button></li></ul>
    </div>
  )
}

export default Card
