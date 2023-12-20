const express = require('express');
const app = express();

const PORT = 5000;

app.get('/',(req,res)=>{
    res.send('<h1>Hello There!</h1>');
});

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})