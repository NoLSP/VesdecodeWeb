const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/Task1', (req, res) => {
    res.render('task1');
})

router.get('/Task2', (req, res) => {
    res.render('task2');
})

router.get('/Task3', (req, res) => {
    res.render('task3');
})

router.get('/Task4', (req, res) => {
    res.render('task4');
})

router.get('/Task5', (req, res) => {
    res.render('task5');
})

module.exports = router;


