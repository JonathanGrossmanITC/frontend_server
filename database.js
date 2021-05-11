//Mongo setup
const { MongoClient, ObjectID } = require("mongodb");

const url =
  "mongodb+srv://user:user@cluster0.j9ran.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });
const dbName = "main_db";
let dates_collection = "";
let db;

client.connect().then((response) => {
  if (response.topology.s.state === "connected") {
    console.log("Status: " + response.topology.s.state);
    db = client.db(dbName);
    // Use the collection named "users"
    dates_collection = db.collection("dates");
    food_collection = db.collection("food");
  } else {
    console.log("Problem connecting to MongoDB");
  }
});

const getAllDates = async () => {
  all_db_users = await dates_collection.find().toArray();
  return all_db_users;
};

const addDate = async (data) => {
  newDate = dates_collection.insertOne(data);
  newDate.then((response) => {
    return response.insertedId;
  });
};

const getAllFoods = async () => {
  all_db_food = await food_collection.find().toArray();
  return all_db_food;
};

const addFood = async (data) => {
  newFood = food_collection.insertOne(data);
  newFood.then((response) => {
    return response.insertedId;
  });
};

exports.getAllDates = getAllDates;
exports.addDate = addDate;
exports.getAllFoods = getAllFoods;
exports.addFood = addFood;
