import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FcAlarmClock } from 'react-icons/fc';
import { BsCalendar3 , BsArrowRight} from 'react-icons/bs';
import { MdOutlineFastfood} from 'react-icons/md';
import Butsl1 from './buttonslider/Butsl1';
import Butsl2 from './buttonslider/Butsl2';
import Recommend from './recommend/Recommend';
import './Select.module.css'

export default function Select() {
  return (
    <>
      <div className='container border-black'>
        <div className='flex container p-3 '>
          <IoIosArrowBack size={24} />
          <span className='sm:mx-8 md:mx-8 lg:mx-12 xl:mx-12 leading-tight text-lg font-bold'>Select Dishes</span>
        </div>
        <div className='container bg-gradient-to-b from-black '>
          <br />
          <br />
          {/* container for date and time */}
          <div className='container p-3 z-2 mt-2'>
            <div className='grid grid-cols-2 border-2 rounded-md drop-shadow-md place-items-center p-2 h-24 bg-white bg-white'>
              <div className='flex'>
                <BsCalendar3 className='self-center' size={24} fill='orange'/>
                <span className='font-bold lg:text-lg xl:text-lg sm:text-xs mx-1'>21 May 2021</span>
              </div>
              <div className='flex'>
                <FcAlarmClock className='self-center' size={24} fill='orange' />
                <span className='font-bold lg:text-lg xl:text-lg sm:text-xs '>10:30PM-12:30PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Butsl1 />
      <span className='text-2xl font-bold p-5'>Popular Dishes</span>
      <Butsl2 />
      <hr />
      <div className='scrollable-container'>
        <Recommend />
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center mb-8">
            <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 drop-shadow-md ">
               <MdOutlineFastfood className='mr-2'/> 3 food Items Selected <BsArrowRight className='ml-4'/>
            </button>        
      </div>
    </>
  );
}
