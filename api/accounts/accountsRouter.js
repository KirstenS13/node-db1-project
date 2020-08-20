const express = require('express');
const db = require('../../data/dbConfig');

const router = express.Router();

// endpoints

// get all accounts
router.get("/", async (req, res, next) => {
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
router.get("/:id", async (req, res, next) => {
    try {
        const account = await db
            .select("*")
            .from("accounts")
            .where("id", req.params.id)
        
        if (account.length === 0) {
            res.status(404).json({
                message: "No account with that ID was found"
            })
        } else {
            res.json(account)
        }
    } catch (err) {
        next(err)
    }
})

// create account
router.post("/", async (req, res, next) => {
    try {
        const [id] = await db
            .insert({
                name: req.body.name,
                budget: req.body.budget
            })
            .into("accounts")

        console.log(id)
        const newAccount = await db
            .select("*")
            .from("accounts")
            .where("id", id)
            .first()

        console.log(newAccount)
        res.status(201).json(newAccount)
    } catch (err) {
        next(err)
    }
})

// update account
router.put("/:id", async (req, res, next) => {
    try {
        await db("accounts")
            .update({
                name: req.body.name,
                budget: req.body.budget
            })
            .where("id", req.params.id)

        const account = await db
            .select("*")
            .from("accounts")
            .where("id", req.params.id)
            .first()

        res.json(account)
    } catch (err) {
        next(err)
    }
})

// delete account
router.delete("/:id", async (req, res, next) => {
    try {
        await db("accounts")
            .where("id", req.params.id)
            .del()

        res.json({
            message: "Account deleted"
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;