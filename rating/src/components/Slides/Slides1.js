// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Slides1 = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIICkQBIWrL9BHNVo3IsB0HEhPqPiro_dAA&s'
    },
    {
      url:'https://media.gettyimages.com/id/88928012/photo/india-students-of-indian-institute-of-technology-kanpur-in-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=2wNuFsKXXl8d4DD3xcT4Er8pVaRYbhO1sEYf3hTrShs='

    },
    {
      url:'https://media.gettyimages.com/id/88905963/photo/india-students-of-indian-institute-of-technology-kanpur-in-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=vKBy3dFWNG96ku8COUf3ZXKuTBZSDc3BoPlT2qCZz64='
    },
    {
      url:'https://media.gettyimages.com/id/88927328/photo/india-students-of-indian-institute-of-technology-kanpur-in-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=B6kGRrJJ4tWYeNFYs8fkBFDD9OKvX70fbXVz2JLhdCo='
    },
    {
      url:'https://pkklib.iitk.ac.in/images/2023/09/23/gal2.png'
    },
    
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
    <div className='max-w-[2000px] h-[350px]  w-full m-auto bottom-9 py-10 px-0 relative group'>
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

export default Slides1
// hidden group-hover:block