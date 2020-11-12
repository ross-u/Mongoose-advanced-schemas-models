const mongoose = require("mongoose");
const data = require("./data.js");
const DB_NAME = "iron-bank";

// CLIENT MODEL
const Client = require("./models/ClientModel.js");

// CREATE A DATABASE CONNECTION INSTANCE - TO DB `example-mongoose`
mongoose
  .connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to Mongo Database -> ${DB_NAME}`))
  .catch((err) =>
    console.error(`Error connecting to Mongo Database - ${DB_NAME}`, err)
  );

// INSERTING DOCUMENTS - `Model.create`   // https://mongoosejs.com/docs/api.html#model_Model.create
let client1 = {
  name: "Infamous Bob",
  age: 60,
  accountActive: true,
  balance: 31218.56,
  payments: [],
};

// RETRIEVE A SINGLE DOCUMENT - `Model.findById`    //https://mongoosejs.com/docs/api.html#model_Model.findById

//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`    //  https://mongoosejs.com/docs/api.html#model_Model.insertMany

//  RETRIEVE DOCUMENTS  - `Model.find`    //  https://mongoosejs.com/docs/api.html#model_Model.find

// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate    // https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

// DELETE ONE DOCUMENT -  Model.deleteOne   // https://mongoosejs.com/docs/api.html#model_Model.deleteOne
