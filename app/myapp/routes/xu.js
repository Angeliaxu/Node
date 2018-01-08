const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('xu', { name: 'xuchang' })
        // res.send('angeliaxuchang')
});
module.exports = route;