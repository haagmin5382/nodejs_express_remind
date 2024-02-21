"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_model_1 = require("./cats.model");
var router = express.Router();
router.get("/cats", function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({ success: true, data: cats });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.get("/cats/:id", function (req, res) {
    try {
        var id_1 = req.params.id;
        var cat = cats_model_1.Cat.find(function (cat) {
            return cat.id === id_1;
        });
        res.status(200).send({ success: true, data: { cat: cat } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.post("/cats", function (req, res) {
    try {
        var data = req.body;
        var cats = cats_model_1.Cat;
        cats.push(data);
        console.log("enter data?", cats);
        res.status(201).send({ success: true, data: { cats: cats } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map