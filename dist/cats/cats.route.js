"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_model_1 = require("./cats.model");
var route = express.Router();
route.get("/cats", function (req, res) {
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
route.get("/cats/:id", function (req, res) {
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
route.post("/cats", function (req, res) {
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
route.put("/cats/:id", function (req, res) {
    try {
        var body_1 = req.body;
        var id_2 = req.params.id;
        var result_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === id_2) {
                cat = body_1;
                result_1 = cat;
            }
        });
        res.status(201).send({ success: true, data: { cat: result_1 } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
route.patch("/cats/:id", function (req, res) {
    try {
        var body_2 = req.body;
        var id_3 = req.params.id;
        var result_2;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === id_3) {
                cat = __assign(__assign({}, cat), body_2);
                result_2 = cat;
            }
        });
        res.status(201).send({ success: true, data: { cat: result_2 } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
route.delete("/cats/:id", function (req, res) {
    try {
        var id_4 = req.params.id;
        var result = cats_model_1.Cat.filter(function (cat) { return cat.id !== id_4; });
        res.status(201).send({ success: true, data: { cat: result } });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
exports.default = route;
//# sourceMappingURL=cats.route.js.map