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
app.get('/dashboard/clients', (req, res) => res.render('clients', {
    title: 'Clients',
    path: '/dashboard/clients'
}));
app.get('/dashboard/transactions', (req, res) => res.render('transactions', {
    title: 'Transaction',
    path: '/dashboard/transactions'
}));
app.get('/dashboard/services', (req, res) => res.render('services', {
    title: 'Services',
    path: '/dashboard/services'
}));
app.get('/dashboard/add-clients', (req, res) => res.render('add-clients', {
    title: 'Add Clients',
    path: '/dashboard/add-clients'
}));
app.get('/dashboard/add-transaction', (req, res) => res.render('add-transaction', {
    title: 'Add Transaction',
    path: '/dashboard/add-transaction'
}));
app.get('/dashboard/add-service', (req, res) => res.render('add-service', {
    title: 'Add Service',
    path: '/dashboard/add-service'
}));

app.listen(PORT, () => console.log('App listenning on port ' + PORT))