const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
})

router.get('/Task1', (req, res) => {
    res.render('task1.hbs');
})

router.get('/Task2', (req, res) => {
    res.render('task2.hbs');
})

router.get('/Task3', (req, res) => {
    res.render('task3.hbs');
})

router.get('/Task4', (req, res) => {
    res.render('task4.hbs');
})

router.get('/Task5', (req, res) => {
    res.render('task5.hbs');
})

module.exports = router;


