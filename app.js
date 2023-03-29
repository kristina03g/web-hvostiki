const express = require('express');
const Sequelize = require("sequelize");

const sequelize = new Sequelize("hvostiki_db", "root", "", {
  dialect: "mysql",
  host: "localhost"
});