import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className='h-screen bg-gray-200'>
      <h1 className='flex justify-center text-4xl font-bold text-gray-800'>
        JobListing
      </h1>
      <div className='flex justify-evenly mt-10'>
        <button
          className='text-3xl border-2 mt-50 ml-10 px-10 border-4 shadow-3xl bg-gray-800 text-white border-amber-300 border-b-blue-800'
          onClick={() => navigate('/list-job')}
        >
          List Job
        </button>
        <button
          className='text-3xl border-2 mt-50 ml-10 px-10 border-4 shadow-3xl bg-gray-800 text-white border-amber-300 border-b-blue-800'
          onClick={() => navigate('/find-job')}
        >
          Find Job
        </button>
      </div>
    </div>
  );
}

export default App;
