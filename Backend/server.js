import express from "express";
import env from "dotenv";
env.config();
import products from "./productData.js";
import cors from "cors"

const app = express();

const PORT = 3000;
app.use(cors())

app.get("/", (req, res)=> {
   res.send(products)
})

app.get("/products/:id", (req, res)=> {
    const productId = req.params.id;
    const selectedProduct = products.find((each)=> each._id == productId);
    if(selectedProduct) {
        return res.send(selectedProduct)
    }else {
        res.send("no product found")
    }
})





app.listen (PORT, () => {
    console.log(`backend is running on port ${PORT}`)
})