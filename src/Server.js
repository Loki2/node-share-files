if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}



const http = require('http');
const app = require('./App');
// const app = express();
const PORT = process.env.PORT;

// connectDB();

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('🚀 Server is running http://localhost:' + PORT);
})  