const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const userRoutes = require("./api/routes/user");
const orgRoutes = require("./api/routes/organisations");
const commentRoutes = require("./api/routes/comments");

const TokenHelper = require('./api/helpers/token')

// app.use(cors({
//     origin: [
//       'http://localhost:3000',
//       'https://mypage.com',
//     ],
//     credentials: true
//   }));
app.use(cors())
app.use(morgan('dev'))
//app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(TokenHelper.addUser)



app.use("/users", userRoutes);
app.use("/organisations", orgRoutes);
app.use("/comments", commentRoutes);



app.use(function (req, res, next) {
    return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
});


const port = 3001
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

