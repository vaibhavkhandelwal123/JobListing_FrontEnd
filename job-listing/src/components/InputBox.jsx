import React from 'react'

const InputBox = ({ placeholder,value,name ,handleChange}) => {
  return (
    <div className='flex justify-center mt-4 '>
      <input
  value={value}
  name={name} 
  onChange={handleChange}
  type="text"
  className="border-2 border-gray-300 rounded-md p-2 m-2 w-full"
  placeholder={placeholder}
/>
    </div>
  )
}

export default InputBox