import mongoose, { set } from "mongoose";
import validator from "validator";
set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/Product-model-mongoose", {
  // useNewUrlParser: true,
  // useCreateIndex: true,
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Price must be greater than 0");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      minLength: 2,
      validate(value) {
        if (!value.every((element) => validator.isURL(element))) {
          throw new Error("Image must be valid URL");
        }
      },
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, ["he-IL"])) {
          throw new Error("Number must be valid israeli mobile phone number");
        }
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
});
//* Item 1
// const product = new Product({
//   name: "Aladin",
//   category: "Ginnie",
//   isActive: true,
//   details: {
//     description: "A speacial ginnie that gives youe 3 wishes",
//     price: 1000000,
//     discount: 0,
//     images: ["http://www.ginnie.com", "http://www.magicginnie.com"],
//     phoneNumber: "+972555555555",
//   },
// });
//* Item 2
// const product = new Product({
//   name: "Hoola-Hoop",
//   category: "Toys",
//   isActive: true,
//   details: {
//     description: "A speacial gholla-hoop that gives youe 3 wishes",
//     price: 100,
//     discount: 0,
//     images: [
//       "https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
//       "https://images.unsplash.com/photo-1453060590797-2d5f419b54cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     ],
//     phoneNumber: "+972555555666",
//   },
// });
//* Item 3
// const product = new Product({
//   name: "M-16 A4 flat-top",
//   category: "Kids accesorries",
//   isActive: true,
//   details: {
//     description: "A speacial semi automatic rifle that gives youe 3 wishes",
//     price: 1000,
//     discount: 10,
//     images: [
//       "https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//       "https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     ],
//     phoneNumber: "+972555555777",
//   },
// });
//* Item 4
// const product = new Product({
//   name: "Ipad pro 12.9",
//   category: "Electronics",
//   isActive: true,
//   details: {
//     description: "A speacial semi automatic rifle that gives youe 3 wishes",
//     price: 1000,
//     discount: 10,
//     images: [
//       "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
//       "https://images.unsplash.com/photo-1597198399495-ff26429c4ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     ],
//     phoneNumber: "+972555555777",
//   },
// });

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log("Catch Error!!! ", error);
  });
