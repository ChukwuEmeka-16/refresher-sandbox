import React from 'react'
import { useParams } from 'react-router-dom';

const Todos = () => {
    const {id} = useParams()
  console.log(id);
  return (
    <div>Todos</div>
  )
}

export default Todos