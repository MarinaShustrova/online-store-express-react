/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;
const dbConnect = require('./db/dbconnect');

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server started in good mood on port ${5000}`));
