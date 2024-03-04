import React from 'react'
import Slider from 'react-slick'
import { prodata } from '../data/prodata';
import ProjectCard from './ProjectCard';
import {MdOutlineVerticalAlignTop } from 'react-icons/md'




const Projects = () => {

    const  settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
        };




  return (
    <div className='md:max-w-[1480px] m-auto max-w-[600] mt-[150px]'>
      <div className='flex items-center justify-center mb-[96px]'>
        <h1 className='text-2xl text-gradient drop-shadow-glow text-center'>Aliqua non ullamco Lorem nisi magna. Consequat consectetur consequat cupidatat fugiat excepteur aliquip aliqua labore laborum pariatur nostrud amet tempor. Qui officia dolore elit pariatur nostrud excepteur deserunt sunt mollit veniam ut. Qui deserunt reprehenderit deserunt occaecat est nostrud adipisicing ut ad ex. Irure quis dolor et aliquip esse incididunt esse proident aliquip pariatur consectetur Lorem. Non nulla commodo mollit nulla proident ullamco adipisicing ex.</h1>

      </div>

      <div>
        <h2 className='text-3xl text-center mb-[48px] text-gradient-gtw font-bold drop-shadow-glow'>
          Here are a few of my projects
        </h2>
      </div>
      

        <Slider {...settings}>
            {prodata.map((project) => (
                <ProjectCard key={project.id} card={project} />
            ))}
        </Slider>
      
        <div className="text-center mt-[100px] flex items-center justify-center">
          <MdOutlineVerticalAlignTop 
            className='cursor-pointer icon-wrapper drop-shadow-glow'
            style={{color:'#35bbd0'}}
            size={85}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          />
        </div>

        

     </div>
  )
}

export default Projects
