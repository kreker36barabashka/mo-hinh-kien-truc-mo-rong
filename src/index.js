const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Mô Hình Kiến Trúc Mở Rộng!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
