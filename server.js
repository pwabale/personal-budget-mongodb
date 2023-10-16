const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const dbConnection = require("./db/db");
app.use('/', express.static('public'));
const budgetSchema = require("./models/pb_schema");



app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/budget', (req, res) => {
    budgetSchema.find({})
        .then((data) => {
            // console.log(data);
            res.send(data);
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })
});

app.post("/insertBudget", (req, res) => {
    let newData = new budgetSchema(req.body);
    budgetSchema.insertMany(newData)
        .then((data) => {
            res.send("Data Inserted into database Successfully")
           
        })
        .catch((connectionError) => {
            console.log("1", connectionError)
            
        })
})

dbConnection().then(()=>{
   console.log("database connection succesfully ")
    app.listen(port, () => {
        console.log('Example app listening at http://localhost:3000');
    });
})

