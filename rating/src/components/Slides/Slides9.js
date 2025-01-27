// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Slides9 = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
      url:'https://media.glassdoor.com/l/0a/75/c1/a7/college.jpg?signature=002bb839dfd132886a71377684599b3968b40441e7eebdbdba28184f694df758'
    },
    {
      url:'https://vit.ac.in/wp-content/uploads/2025/01/1H2A9320-copy-1536x924.webp'

    },
    {
      url:'https://vit.ac.in/wp-content/uploads/2024/12/1-3-scaled.webp'
    },
    {
      url:'https://vit.ac.in/wp-content/uploads/2024/11/1H2A6779.webp'
    },
    {
      url:'https://vit.ac.in/wp-content/uploads/2024/09/1H2A1211_0-1.jpg'
    },
    {
      url:'https://vit.ac.in/wp-content/uploads/2024/05/1H2A9757_thumb.webp'
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

export default Slides9
// hidden group-hover:block