const express = require('express');
const exphbs = require('express-handlebars');
const todosRoutes = require('./Routes/routes');
var jsdom = require("jsdom");

const PORT = process.env.PORT || 3000;
const app = express();

const hbs = exphbs.create({
    defaultlayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'Views');

app.use(todosRoutes);
app.use(express.static('scripts'));

async function start(){
    try {
        app.listen(PORT, () => {
            console.log('Server has been started...');
        })
    } catch(e) {
        console.log(e);
    }
};

start();