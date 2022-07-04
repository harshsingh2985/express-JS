// CREATING SERVER USING EXPRESS JS

const express=require("express");

const app=express();

const port=4500;
// creating pages like we did in the express js creating pages using if or else statment 
app.get("/",(req,res)=>{
    res.send("<h1>Hello Welcome to the home page</h1>")

})
// for contact page
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>")
})

// for services pages
app.get("/services",(req,res)=>{
    res.send("<h1>Services Page</h1>")
})

app.listen(port,()=>{
    console.log(`congrats port working on the server:${port}`)

})