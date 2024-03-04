import React from 'react'
import csharplogo from "../assets/images/csharplogo.png";
import cpluslogo from "../assets/images/cpluslogo.png";
import pythonlogo from "../assets/images/pythonlogo.png";
import unitylogo from "../assets/images/unitylogo.png";

const MiddleLogos = () => {
  return (
    <div className='md:max-w-[1480px] max-w-[600px] text-center mx-auto mt-[96px]'>
      <div className="flex items-center justify-between">
        <img className='md:max-w-[100px] md:ml-[100px] max-w-[75px] h-auto mt-[10px] rounded-full' src={cpluslogo} alt="C++ Logo" />
        <img className='md:max-w-[100px] max-w-[75px] h-auto mt-[10px] rounded-full' src={csharplogo} alt="C# Logo" />
        <img className='md:max-w-[100px] max-w-[75px] rounded-full' src={pythonlogo} alt="Python Logo" />
        <img className='md:max-w-[100px] max-w-[75px] rounded-full' src={unitylogo} alt="Unity Logo" />
      </div>
    </div>

  )
}

export default MiddleLogos