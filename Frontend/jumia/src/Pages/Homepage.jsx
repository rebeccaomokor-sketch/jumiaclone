import Banner from "../component/homepageComponent/banner";
import Products from "../component/homepageComponent/products";
import BrandDay from "../component/homepageComponent/brandDay";
import SecondChance from "../component/homepageComponent/secondChance";
import Description from "../component/homepageComponent/description";
import Products2 from "../component/homepageComponent/product2";

function Homepage() {
    
    return (
        <>
         
          <Banner />
          <Products2 />
          <Products />
          <BrandDay />
          <SecondChance />
          <Description />
          

        </>
    )
}

export default Homepage;