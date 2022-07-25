//Standard Imports
const path = require('path');

//server import
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//handlebars
const exphbs = require('express-handlebars');
const { ObjectID } = require('bson');
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
        if (err) throw err
        db = client.db();
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
app.get('/', async (req, res) => {
    const recipeObject = await db.collection('recipe').find({})
    const recipes = await recipeObject.toArray()
    //const recipes = recipeArray.map((recipe) => recipe.get({ plain: true }))


    // console.log(recipes)

    res.render('home', {recipes})
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.get('/recipe/:id', async (req, res) => {
    const recipe = await db.collection('recipe').findOne({ _id: new ObjectID(req.params.id)})
    const ingredients = recipe.ingredients
    const quantity = recipe.quantity
    const ingredientsArray = []
    for (i=0; i < ingredients.length; i++) {
        let ingredientAndQuantity = [ingredients[i], quantity[i]]
        ingredientsArray.push(ingredientAndQuantity)
    }
    // console.log(ingredientsArray)
    res.render('recipe', {recipe, ingredientsArray})
})

app.route('/recipe').get(async (req, res) => {
    const recipes = await db.collection('recipe').find({}).toArray()
    console.log(recipes)
    for (const recipe of recipes) {
        console.log(recipe.title)
        console.log(recipe.style)
        console.log(recipe.ingredients)
        console.log(recipe.steps)
    }
    res.render('recipe')
}).post((req, res) => {
    db.collection('recipe').insertOne(req.body)
    res.status(200).json('database hit')
})



app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))