const express = require("express");
const accountsRouter = require('./accounts/accountsRouter');

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/accounts", accountsRouter);

// welcome message
server.get("/", (req, res) => {
    res.json("Welcome")
})

module.exports = server;
