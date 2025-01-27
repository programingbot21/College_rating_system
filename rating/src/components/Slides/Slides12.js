// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Slides12 = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
      url:'https://media.licdn.com/dms/image/v2/C561BAQGyNw1ABKvMkw/company-background_10000/company-background_10000/0/1639466456437/applied_mechanics_iit_delhi_cover?e=2147483647&v=beta&t=TOsZIkHBUq_kLvuaDOs4aDW7tjzX2_3trjBgAyrsKfA'
    },
    {
      url:'https://library.iitd.ac.in/sites/default/files/styles/wide/public/2024-10/1.jpeg?itok=-b7JvhZ0'

    },
    {
      url:'https://library.iitd.ac.in/sites/default/files/styles/wide/public/2024-09/1.jpeg?itok=KwttrjQA'
    },
    {
      url:'https://library.iitd.ac.in/sites/default/files/styles/wide/public/2024-08/20240812_113721_0.jpg?itok=63zvfezV'
    },
    {
      url:'https://library.iitd.ac.in/sites/default/files/styles/wide/public/2024-08/15_0.jpg?itok=vJr4IRgE'
    },
    {
      url:'https://library.iitd.ac.in/sites/default/files/styles/wide/public/2024-08/3_0.jpg?itok=Vt1tMmui'
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

export default Slides12
// hidden group-hover:block