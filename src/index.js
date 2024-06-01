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


const HomeController = require('./app/Controllers/HomeController')

const ProductController = require("./app/Controllers/ProductController.js")
const SearchController = require("./app/Controllers/SearchController.js")


const ProductController = require("./app/Controllers/ProductController.js")




app.get('/trangchu', HomeController.home)

app.get('/Product/:slug', ProductController.detail)
app.get('/search', SearchController.search)


app.get('/Product/:slug', ProductController.detail)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})