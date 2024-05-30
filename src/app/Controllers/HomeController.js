const Product = require('../Model/Product')

class HomeController {
  async home(req, res) {
    try {
      const Products = await Product.find({});
      const UIProducts = Products.map(product => product.toObject())
      res.render('home', { Products: UIProducts })
    } catch (error) {
      res.status(400).json({ err: "ERROR!!!" })
    }
  }
}

module.exports = new HomeController()