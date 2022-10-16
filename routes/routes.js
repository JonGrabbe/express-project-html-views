const express = require('express');
const router = express.Router();
const path = require('path');
// const rootDir = require('../helpers/path')

router.get('/about', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    // res.send(htmlForm)
    res.sendFile(path.join(path.join(__dirname, '../', 'views', 'about.html')))
})
router.get('/products', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    // res.send(htmlForm)
    res.sendFile(path.join(path.join(__dirname, '../', 'views', 'products.html')))
})

router.get('/', (req, res, next) => {
    // res.send('<h1>About us page</h1>')
    // res.send(htmlForm)
    res.sendFile(path.join(path.join(__dirname, '../', 'views', 'home.html')))
})

// router.get('/products', (req, res, next) => {
//     // res.send('<h1>About us page</h1>')
//     // res.send(htmlForm)
//     res.sendFile(path.join(rootDir, 'views', 'products.html'))
// })

module.exports = router;