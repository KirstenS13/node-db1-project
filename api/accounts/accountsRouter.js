const express = require('express');
const db = require('../../data/dbConfig');

const router = express.Router();

// endpoints

// get all accounts
router.get("/", async (req, res) => {
    try {
        const accounts = await db
            .select("*")
            .from("accounts")
    
        res.json(accounts)
    } catch (err) {
        next(err)
    }
})

// get accounts by id
router.get("/:id", (req, res) => {

})

// create account
router.post("/", (req, res) => {

})

// update account
router.put("/:id", (req, res) => {

})

// delete account
router.delete("/:id", (req, res) => {

})

module.exports = router;