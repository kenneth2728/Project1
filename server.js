var http = require('http');
var fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();


app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './css')));
app.use(express.static(path.join(__dirname, './images')));

// homepage
app.get('/', (req, res) => {
    res.render('homepage');
});

// about
app.get('/about', (req, res) => {
    res.render('about');
});

// contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
});

// categories
app.get('/categories', (req, res) => {
    res.render('categories');
});

// profile
app.get('/profile', (req, res) => {
    res.render('profile');
});

// login
app.get('/login', (req, res) => {
    res.render('login');
});

// signup
app.get('/signup', (req, res) => {
    res.render('signup');
});

// cart
app.get('/cart', (req, res) => {
    res.render('cart');
});

// payment
app.get('/payment', (req, res) => {
    res.render('payment');
});

// success
app.get('/success', (req, res) => {
    res.render('success');
});

// deleteacct
app.get('/deleteacct', (req, res) => {
    res.render('deleteacct');
});

// gloves
app.get('/gloves', (req, res) => {
    res.render('gloves');
});

// masks
app.get('/masks', (req, res) => {
    res.render('masks');
});

// ppe
app.get('/ppe', (req, res) => {
    res.render('ppe');
});

// inventorypanel
app.get('/inventorypanel', (req, res) => {
    res.render('inventorypanel');
});

// glovesinventory
app.get('/glovesinventory', (req, res) => {
    res.render('glovesinventory');
});

// masksinventory
app.get('/masksinventory', (req, res) => {
    res.render('masksinventory');
});

// ppeinventory
app.get('/ppeinventory', (req, res) => {
    res.render('ppeinventory');
});

// port
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else console.log('Listening to port 3000...');
});