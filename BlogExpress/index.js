const express = require('express')
const path = require('path')
var exphbs  = require('express-handlebars');

const app = express()
const port = 4000

// app.engine('handlebars', exphbs());
app.engine('.hbs', exphbs.engine({ extname: '.hbs', 
defaultLayout: 'main',
layoutsDir: path.join(__dirname, 'views/layouts')

}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname,"static")))
app.use('/', require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})