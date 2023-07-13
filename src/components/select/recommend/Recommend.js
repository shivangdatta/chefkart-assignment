import {React , useState} from 'react'
import {AiFillCaretUp , AiFillCaretDown} from 'react-icons/ai'
import {TbSquareDot} from 'react-icons/tb'
import {BiFridge} from 'react-icons/bi'
import page1 from 'C:/work/DEV/REACT/chefkart/src/page1.json'


export default function Recommend() {
    const [isOpen ,setisOpen] = useState(true);
  return (
    <div className='p-5 h-80 overflow-y-scroll '>
        <div className='flex container grid'>
            <div className='grid grid-cols-2'>
                <div>

                    <button onClick={()=>{
                        
                        setisOpen((prev)=>!prev)
                    }}
                    className='text-2xl font-bold border-4 flex leading-6 p-3 border-transparent'>
                        Recommended
                        {isOpen ? (
                            <AiFillCaretUp className='ml-2'/>
                            ):(
                                <AiFillCaretDown className='ml-2'/>
                                )}
                    </button>
                </div>
                <div className='container grid'>
                    <div className='grid grid-cols-2'>
                        <div></div>
                        <div>
                            <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2 drop-shadow-md ">
                                Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {isOpen && (
            <div>

                {page1.dishes.map(dish => (
                    <div className='container flex border-2  border-transparent mt-8' key={dish.id}>
                        <div className=' container grid grid-cols-7'>
                        <div className="col-span-5 border-b-2 ">
                            <div className='container grid grid-cols-3'>
                                <div className='col-span-2 border-2 text-md sm:text-md md:text-lg lg:text-2xl xl:text-2xl font-bold text-center border-transparent'>
                                    {dish.name}
                                </div>
                                <div className='col-span-1 border-2 flex border-transparent'>
                                    <TbSquareDot className='stroke-lime-500 mx-2 my-1' size={24}/>
                                    <span className='text-md sm:text-md md:text-md lg:text-xl xl:text-xl bg-lime-500 rounded-md px-3  text-white h-6 mt-1'>
                                        {dish.rating}
                                    </span>
                                </div>
                            </div>
                            <div className='container grid grid-cols-2'>
                                <div className='border-r-4 mx-2 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-lg '>
                                    <BiFridge size={32} className='fill-gray-500'/>
                                    {dish.equipments} 
                                </div>
                                <div className=' border-2 mx-2 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-lg  border-transparent'>
                                    <div>
                                        ingridients

                                    </div>
                                    
                                    <div className='text-orange-500 text-sm ml-2 underline underline-offset-1'>
                                        <a href='/dish'>
                                            view full list
                                        </a>
                                    </div>    
                                </div>
                            </div>
                            <div className='mx-2 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-lg mt-4'>
                                {dish.description}
                            </div>
                        </div>
                        <div className="col-span-2 border-3 bg-red-300  border-transparent">
                            <img src={dish.image} alt={dish.name} key={dish.id} className="  w-full rounded-t-lg h-full lg:scale-100 object-fill md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-orange-600 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  z-2 bottom-10 left-8 position-absolute">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
                                    Add
                                </span>
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
