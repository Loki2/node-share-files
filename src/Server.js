if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const db = require("./configs/db.js");
const http = require('http');
const app = require('./App');
// const app = express();
const PORT = process.env.PORT;

// connectDB();

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log('🚀 Server is running http://localhost:' + PORT);

  await db.init();
})  