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
// here get is method .
// CRUD -->to create any full stack app we need FUNCTION 4--> CURD operation -->CREATE READ UPDATE DELETE
// CRUD operation is widely used in the database that we can CREATE DATA READ DATA UPDATE DATA AND DELETE 
// BUT in the world of api CRUD OPERATION IS KNOWN FOR THE DIFFERENT THINGS-->CRUD

// IN THE WORLDS OF API,HTTP HAS FOUR METHODS,
//GET,POST,PUT,DELETE -->GET means we need data ,post means we read the data,put means we need update the data and delete means same delete;
// whenever we made an api and we will use this operation

// now we will see how we will use all this methods by one by one;

app.listen(port,()=>{
    console.log(`congrats port working on the server:${port}`)

})
