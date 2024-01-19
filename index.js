const express = require("express");
const cors = require("cors");
const fs = require('fs');
const PORT = process.env.PORT || 7700;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hi, You are on the Matrix Labs API")
})

app.get('/data',(req,res)=>{
    const data = fs.readFileSync('data.json', 'utf8');
    res.send(data);
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})