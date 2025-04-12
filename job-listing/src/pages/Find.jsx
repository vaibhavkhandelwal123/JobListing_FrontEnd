import React ,{useState} from 'react'
import InputBox from '../components/InputBox'

const Find = () => {
  const [profile, setprofile] = useState('')
  const [desc, setdesc] = useState('')
  const [exp, setexp] = useState('')
  const [techs, settechs] = useState('')
const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'profile':
        setprofile(value)
        break
      case 'desc':
        setdesc(value)
        break
      case 'exp':
        setexp(value)
        break
      case 'techs':
        settechs(value)
        break
      default:
        break
    }
  }

  const onsubmit = (e) => {
    e.preventDefault()
    const data = {
      profile,
      desc,
      exp,
      techs:[techs]
    }
    try{
      fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
      })
    }
    catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className='bg-blue-100 h-screen flex flex-col justify-center items-center'>
      <h1 className='flex justify-center text-4xl'>List-Jobs</h1>
      <div className='flex flex-col items-center'>
      <InputBox
  handleChange={handleChange}
  value={profile}
  name="profile"
  placeholder="Enter Job Title"
/>
<InputBox
  handleChange={handleChange}
  value={desc}
  name="desc"
  placeholder="Enter Job Description"
/>
<InputBox
  handleChange={handleChange}
  value={exp}
  name="exp"
  placeholder="Enter Required Experience"
/>
<InputBox
  handleChange={handleChange}
  value={techs}
  name="techs"
  placeholder="Enter Required Skills"
/>   </div>
      <button onClick={onsubmit} className='border-2 rounded-2xl px-6 py-2 font-semibold mt-4 bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300'>
        Submit
      </button>
    </div>
  )
}

export default Find