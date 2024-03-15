const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Product = require('./Product'); // Make sure to create this model

mongoose.connect('mongodb+srv://ketann682:ES5ET4Grarj7aQwB@cluster0.hxaffr8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database is connected..."));

app.use(cors());
app.use(express.json());
app.use(express.static('../build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});


app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send(product);
});

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));