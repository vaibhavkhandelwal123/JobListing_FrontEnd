import React from 'react'

const Box = ({ profile, desc, exp, skills }) => {
  return (
    <div className='border-2 max-w-80 min-h-26 shadow-2xl bg-gray-100 border-gray-300 rounded-lg p-4 m-4'>
      <h1 className='text-xl'>Profile: {profile}</h1>
      <p>Desc: {desc}</p>
      <p>Exp: {exp}</p>
      <p>Skills: {skills}</p>
    </div>
  )
}

export default Box