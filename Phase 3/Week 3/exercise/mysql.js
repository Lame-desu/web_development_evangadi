const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();

// Answer for Question 1

var connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "1234",
  database: "mydb",
  multipleStatements: true,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected to database");
});

//Answer for Question 2
const products_table = `CREATE TABLE products_table (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_url VARCHAR(100) NOT NULL,
    product_name VARCHAR(100) NOT NULL);`;

const products_description_table = `CREATE TABLE products_description_table (
    description_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    products_brief_description VARCHAR(50) NOT NULL,
    products_description VARCHAR(200) NOT NULL,
    product_image VARCHAR(255),  
    product_link VARCHAR(100) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products_table(product_id)
);`;

const product_price_table = `CREATE TABLE product_price_table (
    price_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    starting_price VARCHAR(100) NOT NULL,
    price_range VARCHAR(100) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products_table(product_id));`;

const orders_table = `CREATE TABLE orders_table (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    user_id INT);`;

const user_table = `CREATE TABLE user_table (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    user_password VARCHAR(100) NOT NULL);`;

// Using netsted-function

function createTables() {
  connection.query(products_table, function (error, results, fields) {
    if (error) throw error;
    console.log("products_table is created");

    connection.query(
      products_description_table,
      function (error, results, fields) {
        if (error) throw error;
        console.log("products_description_table created");

        connection.query(
          product_price_table,
          function (error, results, fields) {
            if (error) throw error;
            console.log("product_price_table created");

            connection.query(user_table, function (error, results, fields) {
              if (error) throw error;
              console.log("user_table created");

              connection.query(orders_table, function (error, results, fields) {
                if (error) throw error;
                console.log("orders_table created");
                console.log("connection closed");
                connection.end();
              });
            });
          }
        );
      }
    );
  });
}

// createTables();  ===> this is for question 2 method 1 (● Include the execution code directly in the module to be executed as you run the app)

app.get("/install", (req, res) => {
  createTables();
  res.end("Tables are created");
});
//  ===> this is for question 2  method 2 (● Use the Express module to receive requests.
//Configure your module in a way that it executes the queries when the "/install" URL is visited.)

app.listen(3001, () => {
  console.log("server is listening");
});

//Using promise
function creatTable(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result, fields) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function createTablesUsingPromise() {
  creatTable(products_table)
    .then(() => {
      console.log("products_table created");
      return creatTable(products_description_table);
    })
    .then(() => {
      console.log("products_description_table is created");
      return creatTable(product_price_table);
    })
    .then(() => {
      console.log("product_price_table is created");
      return creatTable(orders_table);
    })
    .then(() => {
      console.log("orders_table is created");
      return creatTable(user_table);
    })
    .then(() => {
      console.log("users table created");
      connection.end((err) => {
        if (err) {
          console.log("error when closing connection");
          return;
        }
        console.log("connection closed sucessfully");
      });
    })
    .catch((err) => {
      console.log("error when creating one of the tables");
    });
}

// createTablesUsingPromise();

//Using async-await

async function createTablesUsingAsunc_await() {
  try {
    await creatTable(products_table);
    console.log("products_table is created");

    await creatTable(products_description_table);
    console.log("products_description_table is created");

    await creatTable(product_price_table);
    console.log("product_price_table is created");

    await creatTable(orders_table);
    console.log("orders_table is created");

    await creatTable(user_table);
    console.log("user_table is created");

    connection.end((err) => {
      if (err) {
        console.log("error when closing connection");
        return;
      }
      console.log("connection closed sucessfully");
    });
  } catch (error) {
    console.log("Error happened when creating tables");
  }
}
// createTablesUsingAsunc_await();

//
//
//
//
//
//
//
//
//
//
// Answer for question 3

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add_product", (req, res) => {
  addToProduct(req);
  res.send("added to the table");
});

function addToProduct(req) {
  const data = `INSERT INTO products_table (product_id, product_name, product_url)
   VALUES ('${req.body.product_id}', '${req.body.product_name}', '${req.body.product_url}');`;

  connection.query(data, function (error, results, fields) {
    if (error) throw error;
    console.log("new user inserted to products_table");
  });
}
