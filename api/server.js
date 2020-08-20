const express = require("express");
const accountsRouter = require('./accounts/accountsRouter');

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/accounts", accountsRouter);
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong. Please try again later."
    })
})

// welcome message
server.get("/", (req, res) => {
    res.json("Welcome")
})

module.exports = server;
