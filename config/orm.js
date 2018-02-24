// Import the MySQL connection object
// this was from the connection.js (the last line, )
//module.exports = connection; 
var connection = require ('./connection.js');

// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax
// this function is passing an object into Sequel 
// 
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
    // Function that returns all table entries// it manages as our data, what this object does 
    // it has functions that manage our data// selecting, inserting, and updating in this case
    // this is selecting from the controller files / where the data that is inputed (controller) 
    //cb stands for call back // then pass in the result 
	selectAll: function(tableInput, cb) {
        // Construct the query string that returns all rows from the target table
        //defining select all so we can use it in the controller and possible other areas 
		var queryString = "SELECT * FROM " + tableInput + ";";

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

    // Function that insert a single table entry 
    // we are inserting into table, at the columns, these values, and then call back 
	insertOne: function(table, cols, vals, cb) {
		// Construct the query string that inserts a single row into the target table
		var queryString = "INSERT INTO " + table;
// first part a a parenthesis
// turning columns into a string (takes an array, turns it into a string, and separates it by a column)
// the end of the parenthesis // [burger_name, evoured] into "burger_name, devoured"
// next part is the Values// 
// we need a question mark per value we are inputing because this is how the queries run/ its how it handles the data
// we are going to have a query string that is insert into the colunms with the values and those values are determeined 
// by the amount of question marks we have 
// cheeseburger, false this equals to ? question marks ? are place holders 
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	},

	// Function that updates a single table entry
	updateOne: function(table, objColVals, condition, cb) {
        // Construct the query string that updates a single entry in the target table
        // objToSql is taking an object and turning it into a sequel query, 
        // condition is an update all of this when this condition is met 
        // below look further into it. 
        // different queires are needed so not question marks 
        // the reason they are calling it objectColValues 
        // object is the whole thing 
        // plus the column and then the value
        // changes burger-name into bluecheese (erxample) 

		var queryString = "UPDATE " + table;

		queryString += " SET ";
        queryString += objToSql(objColVals);
        // turn it into a swequel string sql only accepts in string 
        // turn a JASON object into a sql string 
        //for example burger-name: bluechees
        // "burger_name =bluechees"
        //key: value - value = "key=value"
        queryString += " WHERE ";
        // exact row you want to update
        // the id is condition 
		queryString += condition;

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		});
	}
};

// Export the orm object for use in other modules
module.exports = orm;
