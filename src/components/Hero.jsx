import React from 'react'
import face from "../assets/images/face.png";
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0 vh mt-[5%]'>

            <div className='flex flex-col justify-center mx-auto'>
                <h1 className='py-2 text-3xl'> <span className='text-7xl text-gradient drop-shadow-glow'>Hi!</span>
                <span className='font-semibold text-gradient-gtw drop-shadow-glow'> My name is </span>
                <span className='text-7xl text-gradient drop-shadow-glow'>Dov.</span>
                </h1>

                <p className='text-3xl'><span className='font-semibold text-gradient-gtw drop-shadow-glow'> I’m an aspiring unity </span>
                <span className='text-gradient drop-shadow-glow'>game-developer</span>
                </p>
                
                <p className='text-xl text-gradient-gtw font-semibold drop-shadow-glow'>
                Contact me
                </p>

                <div className='max-w-[510px] flex'>
                    <a href="https://www.facebook.com/alexey.dov" className='mt-3 icon-wrapper drop-shadow-glow'>
                        <FaFacebookF 
                        size={35}
                        style={{color:'#35bbd0'}}
                        />
                    </a>

                    <a href="https://www.instagram.com/xxxdovxxx/" className='mx-5 mt-3 icon-wrapper drop-shadow-glow'>
                        <div>
                        <FaInstagram size={35}
                        style={{color:'#35bbd0'}}
                        />
                        
                        </div>
                    </a>

                    <a href="mailto:dov@gmail.com" className='mt-3 icon-wrapper drop-shadow-glow' >
                        <div>
                        <AiOutlineMail size={35} 
                        style={{color:'#35bbd0'}}
                        />
                        </div>
                    </a>
                </div>


            </div>

            <img src={face} className='rounded-full md:order-last order-first'  />



        </div>
    </div>
  )
}

export default Hero