import Products from "../component/homepageComponent/products";
import { useState } from "react";

function Cart() {

    const [cart, setCart] = useState(()=> {
            const saved = localStorage.getItem('cartItems');
            return saved ? JSON.parse(saved) : [];
        })

        console.log(cart);

        function clearCart() {
            localStorage.clear();
            alert("items cleared")
        }

    return (
        <>
        <section className="cart">
          <div className="cart-container flex flex-row gap-5">
            <div className="left-div bg-white w-[70%] shadow-xl rounded-[10px]">
                <h1 className="font-bold p-[10px_15px] text-[23px]">Cart(1)</h1>
                {cart ? cart.map((each)=> {
                   return <div className="flex flex-row  jusify-between p-[15px_30px]">
                    <div className="flex flex-row items-center gap-3 w-[70%]">
                        <div className=""><img src={each.img} /></div>
                        <div>
                            <h1 className="font-semibold">{each.name}</h1>
                            <p className="text-[11px]">In Stock</p>
                            <p className="text-[11px] font-bold">Jumia Express</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end  w-[30%]">
                        <h1 className="font-bold text-[19px]">{each.price}</h1>
                        <del>N135,000</del>
                        <div className="flex flex-row justify-between gap-5">
                            <button className="bg-[rgb(163,163,166)] w-8 text-white rounded-md">-</button>
                            <h1>{each.quantity}</h1>
                            <button className="bg-[orange] w-8 text-white rounded-md">+</button>
                        </div>
                    </div>
                </div>
                }): <h1>No Items in Cart</h1>}
            </div>
            <div className="right-div bg-white w-[30%] h-[fit-content] p-[10px_10px] shadow-xl rounded-md">
                <h1 className="p-[10px_20px]">Cart Summary</h1>
                <div className="p-[10px_20px] flex items-center justify-between">
                    <p>Subtotal</p>
                    <h2>N76,500</h2>
                </div>
                <button className="bg-[orange] text-white w-full h-10">Checkout (N76,500)</button>
            </div>
          </div>

          <button className="bg-[red] text-white" onClick={clearCart}>Clear Cart</button>

          <Products />
        </section>
        </>
    )
}


export default Cart;