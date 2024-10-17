require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
// const corsOptions = {
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
app.use(cors);
const itemRouter = require('./api/Items/Items.router');

app.use(express.json());
app.use('/api/items', itemRouter);


app.listen(3000, () => {
  console.log('Server is running at PORT:', 3000);
});