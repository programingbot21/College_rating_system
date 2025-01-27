import React, { useState } from 'react'

function RatingStar() {
  const [starRating, setStarRating] = useState(2)
  const [hoverRating , setHoverRating] = useState(2)

  const handleStar = (star) => {
      setStarRating(star)
  }


  const handlehover = (star) => {
    setHoverRating(star)
  }
  return (
    <div className='w-screen h-screen '>
<div className='relative flex items-top justify-center mb-30 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover(star)}
       onClick={()=>handleStar(star)} className={`text-8xl text-center cursor-pointer 
      ${star <= (starRating || hoverRating)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 
</div>
<p className='text-center t-10 text-20'>Your Rated : {starRating} </p>

</div>
   )
 }




export default RatingStar


    //     <div className='relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0'>
     
    //  <div className="flex flex-row-reverse justify-end items-center">
    //   <input id="hs-ratings-readonly-1" type="radio" className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" defaultValue={1} />
    //   <label htmlFor="hs-ratings-readonly-1" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600">
    //     <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={16} height={30} fill="currentColor" viewBox="0 0 16 16">
    //       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    //     </svg>
    //   </label>
    //   <input id="hs-ratings-readonly-2" type="radio" className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" defaultValue={2} />
    //   <label htmlFor="hs-ratings-readonly-2" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600">
    //     <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
    //       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    //     </svg>
    //   </label>
    //   <input id="hs-ratings-readonly-3" type="radio" className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" defaultValue={3} />
    //   <label htmlFor="hs-ratings-readonly-3" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600">
    //     <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
    //       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    //     </svg>
    //   </label>
    //   <input id="hs-ratings-readonly-4" type="radio" className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" defaultValue={4} />
    //   <label htmlFor="hs-ratings-readonly-4" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600">
    //     <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
    //       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    //     </svg>
    //   </label>
    //   <input id="hs-ratings-readonly-5" type="radio" className="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" defaultValue={5} />
    //   <label htmlFor="hs-ratings-readonly-5" className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-neutral-600">
    //     <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
    //       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    //     </svg>
    //   </label>
    // </div> 
    //  </div>
