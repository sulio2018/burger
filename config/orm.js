var connection = require("./connection.js");

module.exports = {
    selectAll: function(input, cb) {

        var queryString = `SELECT * FROM ${input};`;
        connection.query(queryString, function(err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    insertOne: function(input, cols, vals, cb) {

        var queryString = `INSERT INTO ${input} (${cols.toString()}) VALUES ("${vals[0]})", "${vals[1]}"`
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function(input, condition, cb) {

        var queryString = `UPDATE ${input} SET devoured = true WHERE ${condition};`;
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}
