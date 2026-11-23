import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function ProductDetails() {
    const {id} = useParams();

    const [productData, setProductData] = useState({});

   async function fetchData() {
       try {
         const {data} = await axios.get(`http://localhost:3000/products/${id}`)
         setProductData(data);
         console.log(data)
       }catch(err){
          console.log(`the error is ${err}`)
       }
    }

    useEffect(()=> {
        fetchData(); 
    }, [id])


    return (
        <>
        <section className="flex flex-row gap-3 p-[30px_60px]">
            <div className="w-[75%] bg-white p-[15px_20px] rounded-[10px] flex flex-row gap-4 ">
               <div className="flex flex-col gap-4">
                 <div className="product-pic"></div>
                 <div className="product-prev-pic">
                    <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/65/6401914/1.jpg?1991" alt="" />
                    <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/65/6401914/2.jpg?6322" alt="" />
                    <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/65/6401914/3.jpg?6322" alt="" />
                    <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/65/6401914/4.jpg?6323" alt="" />
                 </div>
                 <div>
                    <h2>Share this product</h2>

                 </div>
               </div>
               <div>
                <div className="flex flex-col gap-2">
                    <p className="bg-black w-[fit-content] text-white text-[11px] p-[5px_5px]">Black Friday Deals</p>
                    <h1 className="text-[20px]">{productData.name}</h1>
                    <p className="text-[12px] bordered">Brand: <span className="text-[blue]">Arsuxeo</span> | <span className="text-[blue] ">Similar products from Arsuxeo</span></p>
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-[25px] font-extrabold">₦ 7,200</h1>
                        <p className="opacity-[0.5]"><del>₦ 35,750</del></p>
                        <p className="w-[fit-content] bg-[#FEF3E9] text-[orange] text-[12px] p-[3px_3px] font-bold">-80%</p>
                    </div>
                    <p className="text-[10px]">In stock</p>
                    <p>+ shipping from ₦ 750 to LEKKI-AJAH (SANGOTEDO)</p>
                    <h3>Select Other Option</h3>
                    <img src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/36/6401914/1.jpg?1550" alt="" className="w-[30px]"/>
                </div>
               </div>
            </div>
            <div>
                <div> </div>
                <div></div>
            </div>      
        </section>
        </>
    )
}

export default ProductDetails;