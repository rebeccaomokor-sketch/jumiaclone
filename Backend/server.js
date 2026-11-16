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


app.listen (PORT, () => {
    console.log(`backend is running on port ${PORT}`)
})