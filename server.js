//Standard Imports
const path = require('path');

//server import
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
//Project imports

//MongoDb
const mongodb = require('mongodb').MongoClient;
const connectionStringURI = `mongodb://127.0.0.1:27017/annspansDB`
let db

mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        db = client.db();
        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`)
        })
    }
)





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

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.route('/recipe').get((req, res) => {
    res.render('recipe')
}).post((req, res) => {
    db.collection('recipe').insertOne(req.body)
    res.status(200).json('database hit')
})

// app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))