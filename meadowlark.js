var express=require('express');
var app=express();

// 视图引擎
var handlebars=require('express3-handlebars')
                .create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars')

app.set('port',process.env.PORT||3000);

app.use(express.static(__dirname+'/public'))

app.get('/',function (req,res) {
    // res.type('text/plain');
    // res.send('Meadowlark Travel')
    res.render('home')
})

app.get('/about',function(req,res){
    // res.type('text/plain')
    // res.send('About Meadowlark Travel')
    // res.render('about')
    var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about',{fortune:randomFortune})
})

// 404
app.use(function (req,res) {
    // res.type('text/plain');
    // res.status(404);
    // res.send('404 - Not Found');
    res.status(404)
    res.render('404')
})

// 500
app.use(function (err,req,res,next) {
    // console.log(err.stack);
    // res.type('text/plain');
    // res.status(500);
    // res.send('500 -Server Error')
    console.log(err.stack);
    res.status(500)
    res.render('500')
})

app.listen(app.get('port'),function () {
    console.log('123')
})

var fortunes=[
    "1",
    "2",
    '3',
    '4',
];