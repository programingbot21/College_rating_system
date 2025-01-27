// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Slides2 = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
      url:'https://wallpaperaccess.com/full/8637655.jpg'
    },
    {
      url:'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slick_media/public/2024-11/vallyball-1.jpg?itok=U-x8qLcZ'

    },
    {
      url:'https://media.gettyimages.com/id/1245658017/photo/mumbai-india-students-take-part-in-techfest-the-annual-science-and-technology-festival-of.jpg?s=612x612&w=0&k=20&c=lvmKYqyHZlV_FEJAKE3RT5njmP6fpuqRhjL9um5dnr8='
    },
    {
      url:'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slick_media/public/2024-11/prof-1.jpg?itok=5j732eB4'
    },
    {
      url:'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slick_media/public/2024-11/cycle-1.jpg?itok=IpQ60ebh'
    },
    {
      url:'https://www.iitb.ac.in/sites/www.iitb.ac.in/files/styles/slick_media/public/2024-01/DSC04310.jpg?itok=48wyGoPf'
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

export default Slides2
// hidden group-hover:block