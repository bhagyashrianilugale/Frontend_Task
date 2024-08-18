import React from 'react'

const Productcard = ({title, price, imgUrl}) => {
  return (
    <div>
        <div className={`w-[240px] h-100 mx-8  sm:mx-3.5 md:mx-3.5 lg:mx-4 p-2 rounded-2xl overflow-hidden hover:transition-none 
                       transition-transform duration-200 transform hover:scale-90`}>
           <div className="relative">
                <img src={imgUrl}
                alt="cart-img" 
                className="rounded-2xl h-40 w-80 shadow-lg  shadow-zinc-400 relative"/>
                <p className="font-bold text-2xl sm:text-2xl lg:text-3xl text-black bg-gradient-to-t from-red-200 text-block bottom-0 
                                  px-2 w-full rounded-b-2xl py-2 absolute">
                            &#8377; {price}       
                </p>
            
          </div>
          <div>
            <h3 className="font-bold opacity-90 text-lg lg:text-xl">
               {title}
            </h3>
         </div>
      </div>  
      
    </div>
  )
}

export default Productcard;
