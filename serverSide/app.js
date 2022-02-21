const express = require("express");
const app = express();
const mysql = require("mysql2");

const config = require("config");
const PORT = process.env.PORT || config.get("port")
const bodyParser = require("body-parser");

app.use(express.json({ extended: true }));
app.use(bodyParser.text());

async function start() {

   try {

      const pool = mysql.createPool({
         connectionLimit: config.get('connectionLimit'),
         host: config.get('host'),
         user: config.get('user'),
         database: config.get('database'),
         password: config.get('password'),
      })

      app.use('/', require('./routes/post.routes')(pool));

   } catch (e) {
      ('server error', e.message);
      process.exit(1);
   }

   app.listen(PORT, () => (`app has been started on port ${PORT}`));
}

start()
