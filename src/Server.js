if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const mongodb = require("mongodb");
const db = require("./configs/db.js");
const http = require('http');
const app = require('./App');
// const app = express();
const PORT = process.env.PORT;

//Connection to database
const mongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectId;

// connectDB();

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log('🚀 Server is running http://localhost:' + PORT);

  await db.init();
})  