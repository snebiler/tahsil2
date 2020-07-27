const express = require('express');
const path = require('path')
const app = express();
const PORT = 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req, res) => res.render('index', {
    title: 'App',
    path: '/'
}));
app.get('/login', (req, res) => res.render('login', {
    title: 'Login',
    path: '/login'
}));
app.get('/register', (req, res) => res.render('register', {
    title: 'Register',
    path: '/register'
}));
app.get('/dashboard', (req, res) => res.render('dashboard', {
    title: 'Dashboard',
    path: '/dashboard'
}));

app.listen(PORT, () => console.log('App listenning on port ' + PORT))