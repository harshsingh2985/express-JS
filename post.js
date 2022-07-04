// post means nothing -->CRUD OPERATION POST MEANS READ THE FILE;
const express=require("express")

const path=require("path");

const app=express();

const port=2000;

const bodyparser=require("body-parser")

// function to use body parser
app.use(bodyparser.urlencoded({extended:false}))

// similar we will make like just we did in the get method -->get means to create;
// get method
app.get("/",(req,res)=>{
    // res.send("<h1>Hello Welcome to the home page</h1>")
    // step 5. in this get method first we will create port and remeber we need in the fs (in the file based system)
    // step 6. we will use the path.join function to open the file on the server and now it is done;
    res.sendFile(path.join(__dirname)+"/index.html");
    // step 7.now it done after completing the name and password are seen in the at top and will here use post method in the html 



})
// for example if we login into the form and data get saved is done by the post method only 
// for the usecase of the post method we will create html form in this validation;

// app.post("/",(req,res)=>{
//     // now we will send the data to the api
//     // const username=req.body.name;

//     // step 4.now we have to use the index.html in this current server now we will use the get method now moving back to the get method
//     // step 10 .console log to check the value of the console
//     // console.log("name on clicking the data")
//     // step 11.this seems that url is same get and post we can use all four method in the same url of the function but in the api  we give the different name of url in every function like get and post method
//     // step 12. we will make again and now the use insted of same url we will write the api action because in the industry we use the api function to define the objects

// })
// step 13.instead of simple url we are using api address
// step 14.Accessing data we will body-parser and we will import 
// step 15. Read About the body-parser from mdn-->npm body-parser and create a varaible body-parser and use the function to get the emplemenation


app.post("/api/v1/login",(req,res)=>{
    res.end("<h1>Done</h1>")
    console.log("name");
    console.log(req.body);
    
})

app.listen(port,()=>{
    console.log(`congulation server cread using post method at http://localhost:${port}`)
})