const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
// const route = require('./routes');
const port = 3000;

// set the view engine to ejs

// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
app.engine(
  'hbs',
  handlebars.engine({
      extname: 'hbs'
  }),
  
);
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.get('/', (req, res) => {
  res.render('home');
})
app.use(morgan('combined'));

// route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})