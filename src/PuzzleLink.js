import React from 'react'
import { Link } from 'react-router-dom';

const PuzzleLink = ({id, slug}) => {
  return (
    <div className='w-full flex items-center justify-center mb-4'>
       <Link to={`/${slug}`} className={`w-1/3 p-4 rounded-sm bg-sky-300`}>{`Puzzle ${id}`}</Link>
    </div>
  )
}

export default PuzzleLink