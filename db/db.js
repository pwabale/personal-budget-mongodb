let url = 'mongodb://127.0.0.1:27017/personal_budget';

const mongoose = require("mongoose");
const connection = ()=> mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = connection;