import React,{useState} from 'react'
// Initialization for ES Users
// import {
//   Carousel,
//   initTWE,
// } from "tw-elements";
// import { Carousel } from "@material-tailwind/react";
import Slides from '../Slides/Slides';

// initTWE({ Carousel });
// import RatingStar from '../Rating/RatingStar';
// import ReactDOM from 'react-dom/client';
// import { Cards } from '../Card/Cards';
// import {Link} from 'react-router-dom'
// function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl  ">
//             {/* <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 ">
//                   <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8"> */}
//                     {/* <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto"> */} 
//                         {/* <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/">
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link> */}
//                     {/* </div> */}
//                 {/* </div>  */}

//                 {/* <div className="absolute inset-0 w-full h-full sm:my-20 sm:pt-1 pt-12  "> */}
//                 {/* <div className=" h-full "> */}
//                      {/* <Cards/> */}
//                    Image {/* <img className="w-full h-full pt-10   rounded-s-full  " src="https://images.unsplash.com/photo-1599634874901-e919c4fe1400?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlpdCUyMHJvb3JrZWV8ZW58MHx8MHx8fDA%3D" alt="image2" /> */}
//                 {/* </div> */}
//                 {/* </div> 
//             </aside> */}
        
// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//   <a href="/">
//     <img className="rounded-t-lg" src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?cs=srgb&dl=pexels-pixabay-159490.jpg&fm=jpg" alt="" />
//   </a>
//   <div className="p-5">
//     <a href="/">
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//     </a>
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     <a href="/information" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//       Read more
//       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
//       </svg>
//     </a>
//   </div>
// </div>


//              {/* <div className="grid  place-items-center sm:mt-20">
//                 {/* <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
//             </div> */}  
            
//             <div className='bg-[#87CEEB] mt-4 rounded-lg '>

//             <h1 className="text-center text-2xl  sm:text-5xl py-10 font-medium text-black">Colleges</h1>
//             <p className='text-2xl text-justify   text-blak'>However, the best college isnt always the one with the highest rankings. Factors such as location, campus culture, class size, and support systems play a crucial role in shaping a student’s experience. For example, smaller liberal arts colleges like Williams or Amherst offer tight-knit communities, personalized attention from professors, and a more intimate learning environment. These colleges may lack some of the resources found in larger institutions but make up for it with a strong emphasis on student-faculty relationships and individualized academic paths. Ultimately, the best college is one that aligns with your personal and academic goals, providing an environment where you feel both challenged and supported.

// Choosing the best college is also about identifying what makes you thrive—whether its a competitive atmosphere, a focus on collaboration, or a deep commitment to social causes. Institutions like Yale, Princeton, and UC Berkeley not only offer academic excellence but also a rich history of leadership and advocacy, producing graduates who excel in fields ranging from politics to social entrepreneurship. Therefore, the best college is one that offers a holistic experience, combining academic rigor, personal development, and opportunities that resonate with your long-term aspirations.</p>
//         </div>
//         </div>
      
        
//     );
// }

// export default Home

  function Home() {
    const [starRating, setStarRating] = useState(4)
  const [hoverRating , setHoverRating] = useState(4)

  const [starRating1, setStarRating1] = useState(4)
  const [hoverRating1 , setHoverRating1] = useState(4)

  const [starRating2, setStarRating2] = useState(3)
  const [hoverRating2 , setHoverRating2] = useState(0)
    
  const [starRating3, setStarRating3] = useState(4)
  const [hoverRating3 , setHoverRating3] = useState(4)

  const [starRating4, setStarRating4] = useState(3)
  const [hoverRating4 , setHoverRating4] = useState(3)

  const [starRating5, setStarRating5] = useState(3)
  const [hoverRating5 , setHoverRating5] = useState(3)

  const [starRating6, setStarRating6] = useState(4)
  const [hoverRating6 , setHoverRating6] = useState(4)

  const [starRating7, setStarRating7] = useState(4)
  const [hoverRating7 , setHoverRating7] = useState(4)

  const [starRating8, setStarRating8] = useState(4)
  const [hoverRating8 , setHoverRating8] = useState(4)

  const [starRating9, setStarRating9] = useState(3)
  const [hoverRating9 , setHoverRating9] = useState(3)

  const [starRating10, setStarRating10] = useState(4)
  const [hoverRating10 , setHoverRating10] = useState(4)

  const [starRating11, setStarRating11] = useState(3)
  const [hoverRating11 , setHoverRating11] = useState(3)

  const handleStar = (star) => {
      setStarRating(star)
  }


  const handlehover = (star) => {
    setHoverRating(star)
  }

  const handleStar1 = (star) => {
    setStarRating1(star)
}


const handlehover1 = (star) => {
  setHoverRating1(star)
}

const handleStar2 = (star) => {
  setStarRating2(star)
}


const handlehover2 = (star) => {
setHoverRating2(star)
}

const handleStar3 = (star) => {
  setStarRating3(star)
}


const handlehover3 = (star) => {
setHoverRating3(star)
}

const handleStar4 = (star) => {
  setStarRating4(star)
}


const handlehover4 = (star) => {
setHoverRating4(star)
}

const handleStar5 = (star) => {
  setStarRating5(star)
}


const handlehover5 = (star) => {
setHoverRating5(star)
}

const handleStar6 = (star) => {
  setStarRating6(star)
}


const handlehover6 = (star) => {
setHoverRating6(star)
}

const handleStar7 = (star) => {
  setStarRating7(star)
}


const handlehover7 = (star) => {
setHoverRating7(star)
}

const handleStar8 = (star) => {
  setStarRating8(star)
}


const handlehover8 = (star) => {
setHoverRating8(star)
}

const handleStar9 = (star) => {
  setStarRating9(star)
}


const handlehover9 = (star) => {
setHoverRating9(star)
}

const handleStar10 = (star) => {
  setStarRating10(star)
}


const handlehover10 = (star) => {
setHoverRating10(star)
}


const handleStar11 = (star) => {
  setStarRating11(star)
}


const handlehover11 = (star) => {
setHoverRating11(star)
}

  return(
    
    <div className=' '>
    
    <div className=''>
      <Slides  autoSlide={true}/>
    </div>

    < div className="relative flex  items-top justify-center min-h-[480px] bg-white sm:items-center  sm:pt-0 gap-x-6">
      {/* <div> */}
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg  " src="https://wallpaperaccess.com/full/9564931.jpg" alt="" />
   </a>
   <div className="p-5">s
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Madras (IITM): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover(star)}
       onClick={()=>handleStar(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating || hoverRating)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating} </p>
</div>
     <a href="/information" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   
 </div>
 
 {/* </div> */}
 <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://home.iitd.ac.in/images/for-faculty/camp8.jpg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Delhi (IITD): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover1(star)}
       onClick={()=>handleStar1(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating1 || hoverRating1)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating1} </p>
</div>
     <a href="/infor1" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>

   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://images.cnbctv18.com/uploads/2023/02/IIT-Bombay-new-1019x573.jpg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Compare IIT Bombay B.Tech. in Computer Science and Engineering</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover2(star)}
       onClick={()=>handleStar2(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating2 || hoverRating2)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating2} </p>
</div>
     <a href="/Infor2" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
    </div>

    <div className="relative flex items-top justify-center min-h-[500px] bg-white sm:items-center sm:pt-0 gap-x-6">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/iit_kanpur_0-sixteen_nine.jpg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Kanpur (IITK): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover3(star)}
       onClick={()=>handleStar3(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating3 || hoverRating3)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating3} </p>
</div>
     <a href="/Info3" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
   
   
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://iitr.ac.in/sfme2022/img/IITR_JT.jpg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Roorkee (IITR): Cutoff, Placement, Fees, Admission 2025, Ranking</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover4(star)}
       onClick={()=>handleStar4(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating4 || hoverRating4)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating4} </p>
</div>
     <a href="/Infor4" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>

   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://media.glassdoor.com/l/aa/6c/3d/7d/administration-building.jpg?signature=dc20f558eda2b369dbea325a4f7f1eb0026a689b64900ac14eb974c8ae5ce86c" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Kharagpur (IIT-KGP): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover5(star)}
       onClick={()=>handleStar5(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating5 || hoverRating5)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating5} </p>
</div>
     <a href="/Infor5" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
    </div>


    <div className="relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0 gap-x-6">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://typeset.io/resources/content/images/2021/07/97.jpeg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Guwahati (IITG): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover6(star)}
       onClick={()=>handleStar6(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating6 || hoverRating6)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating6} </p>
</div>
     <a href="/Infor6" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
   
   
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://research.iith.ac.in/public/frontend/assets/images/iith_src_card.jpg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT Hyderabad (IITH): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover7(star)}
       onClick={()=>handleStar7(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating7 || hoverRating7)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating7} </p>
</div>
     <a href="/Infor7" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>

   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://www.nitt.edu/home/NITT-Main-Gate.JPG" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NIT Trichy (NITT): Cutoff, Placement, Fees, Courses, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover8(star)}
       onClick={()=>handleStar8(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating8 || hoverRating8)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating8} </p>
</div>
     <a href="/Infor8" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
    </div>

    <div className="relative flex items-top justify-center min-h-[500px] bg-white sm:items-center sm:pt-0 gap-x-6">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://prev.iitbhu.ac.in/sites/default/files/juicebox/www/gallery_hss_58_0.jpg" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IIT BHU Varanasi (IIT BHU): Cutoff, Placement, Fees, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover9(star)}
       onClick={()=>handleStar9(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating9 || hoverRating9)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating9} </p>
</div>
     <a href="/Infor9" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
   
   
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://vit.ac.in/wp-content/uploads/2023/08/infra_image1.webp" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VIT Vellore: Courses, Fees, Admission 2025, Placements, Ranking, Cut Off</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
     <div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover10(star)}
       onClick={()=>handleStar10(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating10 || hoverRating10)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating10} </p>
</div>
     <a href="/Infor10" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>

   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <a href="/">
    <img className="rounded-t-lg" src="https://nitdgp.ac.in/iicpage/static/media/NitFrontGate.ac06eab6.webp" alt="" />
   </a>
   <div className="p-5">
     <a href="/">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NIT Durgapur (NIT-DGP): Cutoff, Placement, Fees, Courses, Admission 2025</h5>
     </a>
     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    
<div className='relative flex items-top justify-center mb-30 flex-row my-3 bg-white sm:items-center sm:pt-0 '>
  {
    [1,2,3,4,5].map((star) =>{
      return<span onMouseEnter={()=> handlehover11(star)}
       onClick={()=>handleStar11(star)} className={`text-2xl text-center cursor-pointer 
      ${star <= (starRating11 || hoverRating11)? "text-yellow-400" : ""}`}>
        ★
      </span>
    })
  }
 <p className='text-center t-10 text-20'>Your Rated : {starRating11} </p>
</div>
{/* <p className='text-center t-10 text-20'>Your Rated : {starRating} </p> */}

     <a href="/Infor11" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Read more
       <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
       </svg>
     </a>
   </div>
   </div>
    </div>
   </div>
    
  )
}
export default Home