const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 4000;

//morgan
app.use(morgan('combined'))

//concect to db
const db = require('./config/db/index.js')
db.connect()

//handlebar
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
console.log('PATH: ', path.join(__dirname, 'resources/views'))

const CreateController = require("./app/Controllers/CreateController.js")
const HomeController = require('./app/Controllers/HomeController')

const ProductController = require("./app/Controllers/ProductController.js")
const SearchController = require("./app/Controllers/SearchController.js")

const ProductController = require("./app/Controllers/ProductController.js")
const SearchController = require("./app/Controllers/SearchController.js")



const ProductController = require("./app/Controllers/ProductController.js")
const SearchController = require("./app/Controllers/SearchController.js")
const OrderController = require("./app/Controllers/OrderController.js")
const LoginController = require("./app/Controllers/LoginController.js")



app.post('/login/check', LoginController.check);
app.get('/trangchu', HomeController.home)

app.get('/create', CreateController.create)
app.get('/search', SearchController.search)
app.get('/me/store', MeController.store)

app.get('/Product/:slug', ProductController.detail)
app.get('/search', SearchController.search)

app.get('/Product/:slug', ProductController.detail)
app.get('/search', SearchController.search)


app.get('/Product/:slug', ProductController.detail)
app.get('/Product/detail/:slug/buy', ProductController.buy);
app.get('/Product/:id/edit', ProductController.edit)
app.delete('/Product/:id', ProductController.delete)
app.post('/create/post', CreateController.post)
app.post('/order', OrderController.order)
app.put('/Product/:id', ProductController.update)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})