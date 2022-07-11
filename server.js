//Standard Imports
const path = require('path');

//server import
const express = require('express');

//handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
//Project imports

//PORT
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(session(sess));

//View-engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))