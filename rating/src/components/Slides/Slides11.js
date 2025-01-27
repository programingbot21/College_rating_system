// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Slides11 = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
        url:'https://icandsr.iitm.ac.in/assets/img/slide/icsrsample3.jpg'
      },
      {
        url:'https://media.gettyimages.com/id/1245167587/photo/iit-madras-students-team-raftar-launches-its-first-electric-formula-racing-car-in-chennai-on.jpg?s=612x612&w=0&k=20&c=4j4BPzZHnK7z2MjD9ey55wfrner3XvVuIphRMDxPqos='
  
      },
      {
        url:'https://media.gettyimages.com/id/1233967548/photo/the-iit-madras-research-park-which-houses-the-detect-technologies-ltd-research-and.jpg?s=612x612&w=0&k=20&c=7LEz5rjvpyRbEs05MuBtkxAMZKFGMgKMfIg0EcRH0eM='
      },
      {
        url:'https://www.iitm.ac.in/sites/default/files/instigram/202007/iitm%20academic%20fees.jpg'
      },
      {
        url:'https://media.gettyimages.com/id/72449401/photo/indian-president-abdul-kalam-is-flanked-by-professor-ashok-jhunjhunwalia-department-of.jpg?s=612x612&w=0&k=20&c=UO1FNbJ4BJyUVG1y05iGJzFwDl6v1EvFHsiLPIqG3So='
      },
      {
        url:'https://media.gettyimages.com/id/981565610/photo/25-march-2018-india-chennai-german%C2%A0president%C2%A0frank-walter-steinmeier-talks-to-swostik-sourav.jpg?s=612x612&w=0&k=20&c=ZDgJljrWS_CWIYDbYBehgdQUfvTfDZkbaU2ORwlqOJw='
      }
   ];

   const [current, setCurrent] = useState(3);

   const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
   }


    useEffect(() => {
      if(autoSlide){
        const interval = setInterval(() => {
          setCurrent(current === slides.length - 1 ? 0 : current + 1);
        }, autoSlideInterval);
        return () => clearInterval(interval);
      }
  })

  return (
    <div className='max-w-[2000px] h-[500px]  w-full m-auto bottom-9 py-10 px-0 relative group'>
      <div style={{backgroundImage: `url(${slides[current].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
  
     {/* left Arrow */}
      
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 txet-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer '>
        <BsChevronLeft onClick={nextSlide} size={30}/>
      </div>



    {/* Riight Arrow   */}
    <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 txet-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer '>
      <BsChevronRight onClick={prevSlide} size={30}/>
      </div>

      {/* swiper Autoplay */}
      

<div className='flex top-4 justify-center py-2'>
  {slides.map((slide, index) => (
    <div className='cursor-pointer'>
    <RxDotFilled  key={index} onClick={() => setCurrent(index)} size={20} className={current === index ? 'text-blue-500' : 'text-black'} />
    </div>
  ))}

</div>
      
    </div>

  )
}

export default Slides11
// hidden group-hover:block