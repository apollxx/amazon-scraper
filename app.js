//Requiring the main modules for express
const express = require("express");
const cors = require('cors')

//Requiring the scrape Route
const {scrape} = require("./Routes/scrape")

const port = 3000;

const app = express();

//Using cors and the scrape Route
app.use(cors());
app.use(scrape);

//Initializng the app
app.listen(port, () => {
    console.log("listening on port: "+ port);
})
