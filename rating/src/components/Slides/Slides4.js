// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Slides4 = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
      url:'https://images.unsplash.com/photo-1620496009285-ac853df7b9b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlpdCUyMGtoYXJhZ3B1cnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      url:'https://images.collegedunia.com/public/reviewPhotos/1018189/inbound4406621742048660762.jpg'

    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/IIT_Kharagpur_Old_Building_1951.jpg/1280px-IIT_Kharagpur_Old_Building_1951.jpg'
    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vikramshila_V1_Auditorium.JPG/1024px-Vikramshila_V1_Auditorium.JPG'
    },
    {
      url:'https://images.collegedunia.com/public/college_data/images/campusimage/15096229621489041158e3.jpg'
    },
    {
      url:'https://images.collegedunia.com/public/college_data/images/campusimage/150962197617458187_10155114316310409_37063422099875562_n.jpg'
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
    <div className='max-w-[2000px] h-[400px]  w-full m-auto bottom-9 py-10 px-0 relative group'>
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

export default Slides4
// hidden group-hover:block