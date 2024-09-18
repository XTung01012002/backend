"use strict";
const mongoose = require("mongoose");
const connectString = "mongodb+srv://trinhxuantung01012002:fQ1wWeLI22NHywMS@ecomerce.ehr2e.mongodb.net/?retryWrites=true&w=majority&appName=ecomerce";

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    if (!true) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log("Mongodb Connected");
      })
      .catch((err) => console.log("Error:: " + err));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
