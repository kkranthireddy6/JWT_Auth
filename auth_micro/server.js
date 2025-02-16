import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5001;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res)=> {
    return res.json({message: 'Hello world'})
})

// * Routes
import Routes from "./routes/index.js";
app.use(Routes);

app.listen(port, ()=>{
    console.log(`App auth_microservice listening on the port ${port}`)
})
