import React from 'react';


function App() {
  return (

    <div className="flex flex-col ">
      <div>
        <h2 className="text-lg">Welcome to GYAAN-AI</h2>
      </div>
      <label className='flex flex-col'>
        Paste your content to be extracted: 
        <textarea name="postContent" rows={5} cols={5} className='border-2' />
      </label>
      <div className='flex  justify-center'>
      <button type="submit" className='bg-blue-500 rounded-lg w-16'>Extract</button>
      </div>
      
    </div>
    // <h1 className="text-3xl font-bold underline">
    // Hello world!
    // </h1>

  );
}

export default App;

