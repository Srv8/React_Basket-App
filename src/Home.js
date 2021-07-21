import React from 'react';
import Itemcard from './itemcard';
import data from './data';
const Home = () => {
    return ( 
        <>
        <h1 className = "text-center mt-3" > Items Aailable </h1> 
        <section className = "py-4 container" >
        <div className="row justify-content-center">
            {data.productData.map((item, index)=>{
                return(
                    <Itemcard  
                        desc={item.desc} 
                        title={item.title}
                        price={item.price} 
                        item={item} 
                        key={index}
                    />
                )
            })}
        </div> 
        </section> 
        </>
    )
}

export default Home;