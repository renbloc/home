const express = require('express');
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');

const userRoutes = require("./api/routes/user");
const orgRoutes = require("./api/routes/organisations");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/users", userRoutes);
app.use("/organisations", orgRoutes);



const port = 3001
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

