require('dotenv').config();
const express =require ("express");
// const env = require("env")
const mongoose =require("mongoose");
const port=process.env.PORT || 2022;
const cors =require("cors");
const app= express();
const LOCAL_DB = "mongodb://localhost/foodDB";
const ONLINE_DB = "mongodb+srv://mariam1234:mariam12@cluster0.vtrc7.mongodb.net/foodDB?retryWrites=true&w=majority"

mongoose.connect(ONLINE_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
   console.log(`DB connected to ${ONLINE_DB}`) ;
});

app.use(express.json()); 
app.use(cors())
app.use("/", require ("./COMPONENT/controller"));


app.listen(port, () => {
    console.log(`Server is up and running and listening on port ${port}`);
})