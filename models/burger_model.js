module.exports = function(sequelize, DataTypes){

  var Burgerseq = sequelize.define("BurgerSeq", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  // why return? we would of created it but not returning it
  // it completes the process 
  // ending it and passing it back 
  return Burgerseq;
}








// Import the ORM to implement functions that will interact with the database
/**var orm = require('../config/orm.js');
// give burgers properties
// each of these burger // 
// separation of concerns
// for instance orm takes care of / defines object relational manager
//this defines the data model
// the way to ineract with the model 
// our model is a like a generic row for our data base 
// we are defining methods as well
// define methods that you would utlize with your model 

// Create the burger object
// model is the data 
// its the data that relates to the burger
// the model 
var burger = {
  // Select all burger table entries
  //res = result 
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  // you get the value that you inserted 
  // a call back the passes back the object you created 
  // in this case its the name of the burger and devour 
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  // have knowledge that the model was devoured now you have to update it 
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;**/
