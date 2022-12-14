import mongoose from "mongoose";

mongoose.set("strictQuery", true);


const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  inStock: {
    type: Boolean
  },
  price: {
    type: Number,
    require: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Price must be greater than or equal to 0');
      }
    }
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema)
export default Product;