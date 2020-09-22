const express = require("express");
const server = express();
const utils = require("./utils");
server
  .get("/", (req, rep) => {
    rep.end(process.env.key + " pr");
  })
  .listen(8080, () => console.log("running"));
