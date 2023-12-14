import {faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function ImageSlider({slides}){
  
  let [current, setCurrent] =useState(0);
  let previousSlide =()=>{
    if(current===0) setCurrent(slides.length-1);
    else setCurrent(current-1);
  }
  let nextSlide =()=>{
    if(current===slides.length-1) setCurrent(0);
    else setCurrent(current+1);
  }

  return (
    <div className="overflow-hidden relative rounded-2xl">
      <div className='flex transition ease-in duration-500 ' style={{transform: `translateX(-${current *100}%)` }}>
      {slides.map((s)=>{
        return <img src={s} />
        })}
      </div>
      <div className=' absolute top-0 h-full w-full  items-center flex justify-between text-white  px-7 text-3xl max-sm:text-xl max-sm:px-2 max-md:text-lg max-md:px-5'>
        <button onClick={previousSlide} className='hover:text-emerald-300 cursor-pointer'>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <button onClick={nextSlide} className='hover:text-emerald-300 cursor-pointer'>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
      <div className='absolute bottom-0 py-4 flex justify-center gap-2 w-full'>
        {slides.map((s,i)=>{
          return (
            <div 
            onClick={()=>{
              setCurrent(i)
            }
            }
            key={"circle" +i} 
            className={`rounded-full w-2 cursor-pointer h-2 ${i == current ?"bg-emerald-300":"bg-slate-400"}`}>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}