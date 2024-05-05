const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = process.env.PORT;

const mainURL = `http://localhost:${port}`;

//Middle ware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Init session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true
  }
}));

//import all routers
const authRouters = require("./routers/authRouter");
const fileRouters = require("./routers/authRouter");
const folderRouters = require("./routers/authRouter");
const shareRouters = require("./routers/authRouter");

app.use('/auth', authRouters);

app.use('/files', fileRouters);

app.use('/dirs', folderRouters);

app.use('/shares', shareRouters);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong...!";

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.use(function (request, result, next) {
  request.mainURL = mainURL;
  request.isLogin = (typeof request.session.user !== "undefined");
  request.user = request.session.user;
  next();
});

module.exports = app;