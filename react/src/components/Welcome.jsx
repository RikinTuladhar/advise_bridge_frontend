import React, { useState } from 'react'

export const Welcome = () => {
    // const [count, setCount] = useState(0);

    let count = 0;
    const handleIncrease = () => {
        count += 1
        console.log(count);
    }
    

  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
        <p className="text-2xl text-center py-14">{count}</p>
        <button onClick={() => handleIncrease()} className='border border-gray-400 py-2 px-3 rounded-full'>+</button>
        <button onClick={() => count -= 1} className='border border-gray-400 py-2 px-3 rounded-full'>-</button>
    </div>
  )
}
