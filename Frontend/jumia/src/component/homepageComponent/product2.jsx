import axios from "axios"
import { useState, useEffect } from "react";

function Products2() {

    const [allProduct, setAllproduct] = useState([])

   async function fetchProducts() {
        const {data} = await axios.get("http://localhost:3000");
        console.log(data)
        setAllproduct(data)
   }


   useEffect(()=> {
       fetchProducts()
   }, [])


    return (
        <section className="p-[30px_40px]">
           <div className="bg-red-900 text-white">
             <div className="flex flex-row justify-between p-[20px_30px]">
                <div className="flex flex-row gap-5 items-center">
                    <h1 className="text-[30px] font-extrabold">Flash Sales</h1>
                    <div className="bg-white text-red-900 p-[6px_10px] rounded-xl"><p className="text-sm"><i className="bi-clock"></i>48h: 30m :15s</p></div>
                </div>
                <div>
                    <button className="bg-white text-red-900 text-sm p-[8px_15px] rounded-[50px]">See All <i className="bi-arrow-right"></i></button>
                </div>
             </div>

             <div className="flex flex-row gap-5 p-[30px_30px] products-wrapper">
               {allProduct ? allProduct.map((each)=> {
                   return <div className="bg-white text-black p-[5px_7px] flex flex-col gap-0.5">
                     <img src={each.img} className="w-200 rounded-[15px]" />
                     <p className="text-[13px]">{each.name}</p>
                     <p className="text-[12px] flex items-center gap-2"><i className="bi-star-fill text-[#F68B1E] text-[12px]"></i>3.5 stars</p>
                     <h3>{each.price}</h3>
                     <p><del>N6,500</del> <span>-36%</span></p>
                   </div>
               }) : ""}
             </div>


           </div>
        </section>
    )
}

export default Products2;