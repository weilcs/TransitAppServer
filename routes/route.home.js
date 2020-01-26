const connection = require('../knex/connection');
const express = require('express');
const homeModel = require('../model/home');

const router = express.Router();
router.use(express.json());

router.get('/home', (req, res) => {

    console.log("home request received");
    res.header("Access-Control-Allow-Origin", "*");

});

module.exports = router;