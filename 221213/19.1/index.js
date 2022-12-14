import express from "express";
import "./db/mongoose.js";
import Product from "./models/product.js";

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
// Create
// 1. Create a product
app.post('/products', async (req, res) => {
  const product = await new Product(req.body)
  console.log(req.body)
  await product.save().then(() => {
    res.status(201).send(product)
  }).catch((e) => {
    res.status(400).send(e)
  })
})
// Read
// 1. Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).send(products)
  } catch (err) {
    res.status(400).send(err)
  }
})
// 2. Get a specific product
app.get('/products/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const product = await Product.findById(_id);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error)
  }
})
// 3. Get products that are active
app.get('/products/active', async (req, res) => {
  try {
    const products = await Product.find({active: true})
    res.status(200).send(products)
  } catch (error) {
    res.status(400).send(error)
  }
})
// 4. Get products with a specific price range
// (example min = 50 max = 500)
//Send min and max in the body as: {"min" : "13000","max" : "14000"}
app.get('/productsbyPrice', async (req, res) => {
  const min = req.body.min;
  const max = req.body.max;
  console.log(req)
  console.log("min", min, "max", max)
  try {
    const products = await Product.find({price: {$gte: min, $lte: max}})
    res.status(200).send(products)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.listen(port, () => {
  console.log("-== Server is up at port", port, "==-")
})


// {
//     "name": "Fender Telecaster Custom Shop RI 1952",
//     "category" : "guitars",
//     "inStock":"true",
//     "price": "14800"
// }