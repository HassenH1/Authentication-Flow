const express = require("express")
const app = express()
const methodOverride = require("method-override")
const session = require('express-session')
require('./db/db')

app.use(session({
  secret: "ohnakjsfkjasfkjsa;lfkhsdkjfh",
  resave: false,
  saveUninitialized: false
}))

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: false}))

app.get("/", (req,res) => {
  res.render("index.ejs")
})

app.listen(3000, () => {
  console.log("server listening on port", 3000 )
})