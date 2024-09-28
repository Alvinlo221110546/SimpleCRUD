import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./routes/ItemsRoutes.js";

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser());

app.use('/api/items',router);

app.listen(PORT, ()=>{
    try {
        
        console.log(`server running on http://localhost:${PORT} `)
    } catch (error) {
        console.log("Server error",error)
    }
})