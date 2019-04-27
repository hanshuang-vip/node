var express=require('express');
var app=express();

app.set('port',process.env.PORT||3000);

app.get('/',function (req,res) {
    
})

// 404
app.use(function (req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

// 500
app.use(function (err,req,res,next) {
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 -Server Error')
})

app.listen(app.get('port'),function () {
    console.log('123')
})