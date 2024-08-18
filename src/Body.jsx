import React, { useContext, useEffect, useState } from 'react';
import { Product } from './product';
import Productcard from './Productcard';
import { UserContext } from './App';

const Body = () => {
    const [productInfo, setProductInfo ]=useState(null);
    const user = useContext(UserContext);
    const [searchTitle, SetSearchTitle] = useState("");

    const filterdProducts = productInfo?.filter((product)=>(
              product.title.toLowerCase().startsWith(searchTitle.toLowerCase())
          ));
   
useEffect(()=>{
     setProductInfo(Product);
},[]);
  return (
    <div className="w-10/12 lg:w-9/12 m-auto">
        <div>
            <input
                type="text"
                className="h-19 w-80 px-2 my-10 mx-auto lg:mx-80 outline-none rounded-xl"
                placeholder="Search via title..."
                value={searchTitle}
                onChange={(e)=>SetSearchTitle(e.target.value)}
            />
         
        </div>

        <h1 className='text-2xl lg:text-3xl font-bold text-center p-2 lg:p-4'>Logged in as : {user}</h1>
        <div className='flex flex-wrap'>
            {
              filterdProducts?.length==0
                       ? productInfo?.map((p)=>(<Productcard key={p.id} title={p.title} price={p.price} imgUrl={p.thumbnail}/>))
                       : filterdProducts?.map((p)=>(<Productcard key={p.id} title={p.title} price={p.price} imgUrl={p.thumbnail}/>))
            }
        </div>
    </div>
  )
}

export default Body;
