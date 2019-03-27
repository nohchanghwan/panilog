var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//웹서버세팅=====================================
var app = express();
var port = 4000;

//MongoDB 커넥션================================
var mongoose = require('mongoose');
    //mongoose내장 프로미스가 문제가있어서 global 로 바꿔준다
mongoose.Promise = global.Promise;
var db = mongoose.connection;
    //접속에실패하면 에러, 성공하면 커넥트
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});
mongoose.connect('mongodb://127.0.0.1:27017/panilog',{useNewUrlParser:true});
mongoose.set('useCreateIndex', true);

//============================================▲요위에 데이터베이스이름




var admin    = require('./routes/admin');





//미들웨어세팅===================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); 


//Routing=====================================
app.use('/admin', admin );

app.get('/', function(req,res){
     res.send('first app');
});

app.listen( port, function(){
     console.log('Express listening on port', port);
 });
