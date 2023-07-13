import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import back from 'C:/work/DEV/REACT/chefkart/src/assets/bg-dish.png';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { FcAlarmClock } from 'react-icons/fc';
import { BiFridge } from 'react-icons/bi';
import page2 from 'C:/work/DEV/REACT/chefkart/src/page2.json';

export default function Dish() {
  const [isOpen1, setisOpen1] = useState(true);
  const [isOpen2, setisOpen2] = useState(true);
  const vegetableCount = Object.keys(page2.ingredients.vegetables).length;
  const spiceCount = Object.keys(page2.ingredients.spices).length;
  return (
    <>
      <div className='container border-black overflow-y-hidden'>
        <div className='flex container p-3'>
          <a href="/">
            <IoIosArrowBack size={24} />
          </a>
        </div>
        <div className='container p-3 flex'>
          <span className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-2xl font-bold mr-2'>
            {page2.name}
          </span>
          <span className='text-md sm:text-md md:text-md lg:text-xl xl:text-xl bg-lime-500 rounded-md px-3 text-white h-6 mt-1'>
            4.2
          </span>
        </div>
        <div
          className='flex overflow-x-hidden overflow-hidden  h-80'
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='no-flex'>
            <div className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-sm ml-3 left-10 z-2 mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste natus
              quae eum, inventore quas soluta beatae tempore modi dolore perspiciatis
              vitae fuga in dolorem vero velit, eos nulla fugiat eaque!
            </div>
            <div className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-xl mr-2  ml-3 mb-10 flex'>
              <FcAlarmClock size={24} className='mr-2' />{page2.timeToPrepare}
            </div>
          </div>
        </div>
      </div>
      <div className='p-3 border-2'>
        <div className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-2xl mr-2 font-bold py-3  '>
          Ingredients
        </div>
        <div className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-sm left-10 z-2 mb-5 pb-3 border-b-2'>
          for 2 people
        </div>
        <div className='overflow-x-hidden container '>
          <button onClick={() => {
            setisOpen1((prev) => !prev)
          }}
            className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-lg mr-2 font-semibold py-3 flex'>
            Vegetables ({vegetableCount})
            {isOpen1 ? (
              <AiFillCaretUp className='ml-2' />
            ) : (
              <AiFillCaretDown className='ml-2' />
            )}
          </button>
          {isOpen1 && (
            <>
              {page2.ingredients.vegetables.map((veg, index) => (
                <div
                  className='container grid sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-md mr-2 overflow-hidden'
                  key={index}
                >
                  <div className='grid grid-cols-2 overflow-x-hidden'>
                    <div className='py-1'>{veg.name}</div>
                    <div className='text-center py-1'>{veg.quantity}</div>
                  </div>
                </div>
              ))}
            </>
          )}
          <br />
          <button onClick={() => {
            setisOpen2((prev) => !prev)
          }}
            className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-lg mr-2 font-semibold py-3 flex'>
            Spices ({spiceCount})
            {isOpen2 ? (
              <AiFillCaretUp className='ml-2' />
            ) : (
              <AiFillCaretDown className='ml-2' />
            )}
          </button>
          {isOpen2 && (
            <>
              {page2.ingredients.spices.map((spice, index) => (
                <div
                  className='container grid sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-md mr-2 overflow-hidden'
                  key={index}
                >
                  <div className='grid grid-cols-2 overflow-x-hidden'>
                    <div className='py-1'>{spice.name}</div>
                    <div className='text-center py-1'>{spice.quantity}</div>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className='sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24 leading-tight text-xl mr-2 font-semibold mt-10  '>
                Appliances
            </div>          
          <div className='flex my-2 '>
            {page2.ingredients.appliances.map((ap, index) => (
              <div
                className='container bg-gray-300 w-24 ml-2 sm:mx-12 md:mx-8 lg:mx-24 xl:mx-24'
                key={index}
              >
                <img src={ap.image} alt="not found " className='object-contain text-xs'></img>
                <BiFridge size={24} className='ml-2' />
                <span className='text-black text-center text-sm '>{ap.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
