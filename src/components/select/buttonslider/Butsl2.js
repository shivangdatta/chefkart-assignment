import React from 'react'
import page1 from 'C:/work/DEV/REACT/chefkart/src/page1.json'
import biryani from 'C:/work/DEV/REACT/chefkart/src/assets/bir2.PNG'
export default function Butsl2() {
  return (
    <div className='relative flex item-center'>
        <div id='slider' className='w-full h-full overflow-x-auto whitespace-nowrap flex p-3'>
            {page1.popularDishes.map(pop =>(
              < div key={pop.id} className='overflow-x-hidden container'>
                <img src={biryani} alt='' className='object-scale-down rounded-full w-[160px] p-2 border-2 border-orange-300  cursor-pointer hover:scale-105 ease-in-out duration-300 px-2' >
                </img>
                <span className='text-white '> {pop.name}</span>
              </ div>
            ))}
            

                               
            
        </div>
    </div>
  )
}
