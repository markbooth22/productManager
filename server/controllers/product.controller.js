const { request, response } = require("express");
const Product = require("../models/product.model");


module.exports = {
  getAll: (req, res) => {
    Product.find()
      .then((allProducts) => res.json(allProducts))
      .catch((err) => {
        console.log(`Error getting all product documents: ${err}`)
        res.json(err)
      })
  },
  create: (req, res) => {
    console.log(req.body);
    Product.create(req.body)
      .then((newProductObject) => res.json(newProductObject))
      .catch((err) => {
        console.log(`Error creating all product documents: ${err}`)
        res.json(err)
      })
  },
  getOne: (req, res) => {
    Product.findById(req.params.id)
      .then((oneProduct) => res.json(oneProduct))
      .catch((err) => {
        console.log(`Error getting a single product documents: ${err}`)
        res.json(err)
      })
  },
  update: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((updatedProduct) => res.json(updatedProduct))
      .catch((err) => {
        console.log(`Error updating a single product documents: ${err}`)
        res.json(err)
      })
  },
  delete: (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then((deleted) => res.json(deleted))
      .catch((err) => {
        console.log(`Error deleting a single product documents: ${err}`)
        res.json(err)
      })
  },
}

// module.exports.createProduct = (request, response) => {
//   console.log("herre we are")
//   const { title, price, description } = request.body;
//   Product.create({
//     title,
//     price,
//     description
//   })
//       .then(product => response.json(product))
//       .catch(err => response.json(err))
// }