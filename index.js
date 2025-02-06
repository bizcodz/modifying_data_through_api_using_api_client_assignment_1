const express = require('express');
const { resolve } = require('path');
const app = express();
const port = 3010;
const mongoose = require('mongoose');
const MenuItem = require('./menuSchema');

mongoose.connect('mongodb+srv://keerthan1675:kvk1675B@cluster4.uko8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4')

app.use(express.static('static'));
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.get('/menu', async (res, req) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

app.post('/updateMenu', async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.status(201)
      .json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});