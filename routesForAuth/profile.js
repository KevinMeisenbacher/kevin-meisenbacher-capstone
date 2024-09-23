const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

function getToken(req) {
  if(!req.headers.authorization){
    return;
  } else {
    return req.headers.authorization.split(" ")[1];
  }
}

router.get("/", (req, res) => {
  const token = getToken(req);
  req.decode = jwt.decode(token);
  res.json(req.decode);
});

module.exports = router;