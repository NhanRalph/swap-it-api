const { app, server } = require("./socketIO/server");
const cors = require("cors");
require("dotenv").config();

const express = require("express");

// middlewares
app.use(express.json());
app.use(cors());

const itemRouter = require("./api/Items/Items.router");

app.use(express.json());
app.use("/api/items", itemRouter);

server.listen(3000, () => {
  console.log("Server is running at PORT:", 3000);
});
