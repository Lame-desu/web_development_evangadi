import mysql from "mysql";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host: "localhost",
  user: "lame",
  password: "1234",
  database: "phase3practice1",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  const studentName = req.body.firstName;
  const fatherName = req.body.lastName;
  const id = req.body.id;
  const clas = req.body.class;
  let data = `INSERT INTO students (student_name,father_name, id, class) VALUES ( '${studentName}' , '${fatherName}', '${id}', '${clas}');`;

  connection.query(data, function (err, result, fields) {
    if (err) {
      console.log("there is err" + err);
    }
    console.log("inserted");
  });

  res.send("<h1>request received</h1>");
  res.end();
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});

// connection.query(
//   "CREATE TABLE teachers ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, subject VARCHAR(100) NOT NULL );",
//   function (err, result, fields) {
//     if (err) {
//       console.log("there is err" + err);
//     } else {
//       console.log(result);
//       console.log("created");
//     }
//   }
// );
// let data =
//   "INSERT INTO teachers (id, name, subject) VALUES (1, 'Alice Smith', 'Mathematics'), (2, 'Bob Johnson', 'Science'), (3, 'Charlie Brown', 'History'), (4, 'David Wilson', 'Literature'), (5, 'Eva Green', 'Art');";

// app.listen(3001, () => {
//   console.log("server is listening on port 3001");
// });

// let data2 = "SELECT * FROM teachers WHERE id = 1;";

// connection.query(data2, function (err, result, fields) {
//   if (err) {
//     console.log("there is err" + err);
//   }
//   console.log(result[0]["id"]);
//   console.log(fields);
//   console.log("selected");
// });

// DROP TABLE product_price_table;
// DROP TABLE orders_table;
// DROP TABLE product_price_table;
// DROP TABLE user_table;
// DROP TABLE products_table

// //Using promise
// function creatTable(query) {
//   return new Promise((resolve, reject) => {
//     connection.query(query, (err, result, fields) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// }

// function createTablesUsingPromise() {
//   creatTable(products_table)
//     .then(() => {
//       console.log("products_table created");
//       return creatTable(products_description_table);
//     })
//     .then(() => {
//       console.log("products_description_table is created");
//       return creatTable(product_price_table);
//     })
//     .then(() => {
//       console.log("product_price_table is created");
//       return creatTable(orders_table);
//     })
//     .then(() => {
//       console.log("orders_table is created");
//       return creatTable(user_table);
//     })
//     .then(() => {
//       console.log("users table created");
//       connection.end((err) => {
//         if (err) {
//           console.log("error when closing connection");
//           return;
//         }
//         console.log("connection closed sucessfully");
//       });
//     })
//     .catch((err) => {
//       console.log("error when creating one of the tables");
//     });
// }

// // createTablesUsingPromise();

// //Using async-await

// async function createTablesUsingAsunc_await() {
//   try {
//     await creatTable(products_table);
//     console.log("products_table is created");

//     await creatTable(products_description_table);
//     console.log("products_description_table is created");

//     await creatTable(product_price_table);
//     console.log("product_price_table is created");

//     await creatTable(orders_table);
//     console.log("orders_table is created");

//     await creatTable(user_table);
//     console.log("user_table is created");

//     connection.end((err) => {
//       if (err) {
//         console.log("error when closing connection");
//         return;
//       }
//       console.log("connection closed sucessfully");
//     });
//   } catch (error) {
//     console.log("Error happened when creating tables");
//   }
// }
// // createTablesUsingAsunc_await();
