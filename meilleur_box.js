const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(bodyParser.json());

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"], // Replace with the origin of your front-end application
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "meilleur_box", // Replace with your database name
});

dbConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + dbConnection.threadId);
});

// API endpoint to retrieve user data
app.get("/users", (req, res) => {
  const query = "SELECT * FROM user";
  dbConnection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post("/users", (req, res) => {
  const { fournisseur, addresse, email, name, phone } = req.body;

  if (!fournisseur || !addresse || !email || !name || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const query = "UPDATE `user` SET `name`= ? WHERE `email` = ? ";
  dbConnection.query(query, [name, email], (error, result) => {
    if (error) {
      console.error("Error creating user: " + error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertId,
    });
  });
});

app.post("/users/part", (req, res) => {
  const { fournisseur, addresse, email, phone } = req.body;

  if (!fournisseur || !addresse || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const query =
    "INSERT INTO user (fournisseur, addresse, email, phone) VALUES (?, ?, ?, ?)";
  dbConnection.query(
    query,
    [fournisseur, addresse, email, phone],
    (error, result) => {
      if (error) {
        console.error("Error creating user: " + error.message);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.status(201).json({
        message: "User created successfully",
        userId: result.insertId,
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
