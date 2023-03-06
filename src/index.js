const express = require("express");
const app = express();

const bodyParser = require("body-parser");

require("dotenv").config();

const router = require("./util/router");
const port = process.env.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
    console.log(`[API] Listening on Port: ${port}`);
})