import jumiaLogo from "../../public/jumialogo.png";
import downloadApp from "../../public/downloadapp.png";

function Footer() {
    return (
        <>
            <section className="bg-[#313133] text-white flex flex-row justify-between p-[30px_60px] gap-10" >
                <div className="w-[20%]">
                    <img src={jumiaLogo} className="w-30" />
                </div>


                <div className="w-[50%] flex flex-col gap-3">
                    <h2 className="text-[17px] text-bold">New to Jumia?</h2>

                    <p className="text-[12px]">You can subscribe to our newsletter to get updates on our latest offers, deals and marketing campaigns. <br /><br />
                        To subscribe to our newsletter, you must first read and agree to Jumia's <span className="text-[orange]">Privacy Policy</span> and <span className="text-[orange]">Cookie Notice</span></p>

                    <div className="flex items-center gap-3">
                        <input type="checkbox" /><p className="text-[12px] text-gray-300">I consent to Jumia processing my data to send me newsletters.</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <input type="email" placeholder="Enter Email Address" className="bg-[white] text-black w-[250px] h-[40px] p-[0px_15px] rounded-[5px]" /><button className="text-[12px] border border-[white] w-[100px] h-[40px] rounded-[5px]">Subscribe</button>
                    </div>

                    <p className="text-[12px] text-gray-300">You can withdraw your consent at any time by clicking the Unsubscribe Link at the bottom of any email we send you</p>
                </div>

                <div className="w-[30%]">
                    <div className="flex flex-row items-center gap-3">
                        <img src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw" className="w-9" />
                        <div>
                            <h1 className="text-[11px] font-bold">DOWNLOAD THE JUMIA APP FREE</h1>
                            <p className="text-[11px]">Get access to exclusive offers!</p>
                        </div>
                    </div>
                    <div>
                        <img src={downloadApp} className="w-50" />
                    </div>
                </div>

            </section>

            <section className="bg-[#535357] text-white flex flex-col gap-15 p-[30px_60px]">
                <div className="flex flex-row gap-15">
                    <div className="text-[12px] flex flex-col gap-9">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-sm mb-2">NEED HELP?</h3>
                            <p>Chat With US</p>
                            <p>Help Center</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-sm mb-2">USEFUL LINKS</h3>
                            <p>Service Center</p>
                            <p>How to shop on Jumia?</p>
                            <p>Delivery options and timelines</p>
                            <p>How to return a product on Jumia?</p>
                            <p>Corporate and bulk purchases</p>
                            <p>Report a Product</p>
                            <p>Dispute Resolution Policy</p>
                            <p>Returns & Refund Timeline</p>
                            <p>Return Policy</p>
                            <p>Pickup Stations</p>
                            <p>Jumia Delivery</p>
                        </div>
                    </div>
                    <div  className="text-[12px] flex flex-col gap-9">
                        <div>
                            <h3 className="font-bold text-sm mb-2">ABOUT</h3>
                            <p>About us</p>
                            <p>Jumia careers</p>
                            <p>Corporate Website</p>
                            <p>Terms and Conditions</p>
                            <p>Jumia Payment Information Guidelines</p>
                            <p>Official Stores</p>
                            <p>Flash Sales</p>
                            <p>Black Friday</p>
                            <p>Jumia Blog</p>
                        </div>
                        <div>
                            <h3  className="font-bold text-sm mb-2">Privacy</h3>
                            <p>Privacy Notice</p>
                            <p>Cookie Notice</p>
                            <p>Cookie Preferences</p>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div  className="text-[12px] flex flex-col gap-9">
                        <div>
                            <h3 className="font-bold text-sm mb-2">MAKE MONEY WITH JUMIA</h3>
                            <p>Sell on Jumia</p>
                            <p>Vendor hubs</p>
                            <p>Join Jumia Affiliate Program</p>
                          
                        </div>
                       
                        
                    </div>
                     <div  className="text-[12px] flex flex-col gap-9">
                        <div>
                            <h3 className="font-bold text-sm mb-2">JUMIA INTERNATIONAL</h3>
                            <p>Sell on Jumia</p>
                            <p>Vendor hubs</p>
                            <p>Join Jumia Affiliate Program</p>
                          
                        </div>
                       
                        
                    </div>
                </div>

                <div>

                </div>
            </section>
        </>
    )
}

export default Footer;