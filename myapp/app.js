const express = require('express');
const app = express();



// app.all('/', (req, res, next) => {
//     console.log('2222222');
//     next();

// })
function myLogger1(req, res, next) {
    console.log('this is a middleWare 1 ');
    next();
}

function myLogger2(req, res, next) {
    req.timeStamp = new Date();
    console.log('this is a middleWare 2');
    next();
}
app.use('/', myLogger2);
app.get('/', (req, res, next) => {
    res.send(req.timeStamp);
    // res.download();
    // res.end();
    next();
});

app.use('/demo/:id', myLogger1);


app.listen('4000', () => {
    console.log('example app listening on port 4000')
})

/* 
    中间件：
    Execute any code.
    Make changes to the request and the response objects.
    End the request-response cycle.
    Call the next middleware in the stack.

    If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, 
    because the route handler of the root path terminates the request-response cycle.

    But if u add the parameter of next pass the get function,the middleWare function can execute normally
    so the difference bettwen get and myLogger
*/