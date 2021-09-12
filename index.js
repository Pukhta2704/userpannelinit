require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const connectDB = require('./db/connect');

if (!process.env.NODE_ENV) app.use(cors());
app.use(express.json());
app.use(require('./api/index'));

app.use(express.static('client/build'));
if (process.env.NODE_ENV == 'production') {
  app.get('*', (_, res) => {
    try {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    } catch (error) {
      res.json({ error: error });
    }
  });
}
const server = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
  });
};
connectDB(server);
