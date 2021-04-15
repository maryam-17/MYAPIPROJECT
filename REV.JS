const express =require ("express");
const mongoose =require("mongoose");
const port=proceess.env.PORT || 2111;
const cors =require("cors");
const app= express;
const ONLINE_DB ="mongodb+srv://mariam12345:mariam12345@cluster0.vtrc7.mongodb.net/money?retryWrites=true&w=majority"


const app = express();

mongoose.connect(LOCAL_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
   console.log(`DB connected to ${LOCAL_DB}`) ;
});

app.use(express.json());
app.use("/", require ("./COMPONENT/controller"))


app.listen(port, () => {
    console.log(`Server is up and running and listening on port ${port}`);
})