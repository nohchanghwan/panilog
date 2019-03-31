var express = require('express');
var router = express.Router();
var PostsModel = require('../models/PostsModel');


router.get('/posts/write', function(req,res){
    res.send('posts app(post/write)확인');
});


//PostWrite
router.post('/posts/write', function(req,res){
    
    var post = new PostsModel({
        title : req.body.title,
        body : req.body.body,
        //[6]만약 파일요청이 있으면 저장하고 없으면 말아라
        //thumbnail : (req.file) ? req.file.filename : " ",
        tags : req.body.tags
        //[7]추가 (작성시 로그인되어있는지확인)
        //username : req.user.username
    });

    var validationError = post.validateSync();
    if(validationError){
        res.send(validationError);
    }else{
        post.save(function(err){
            //res.redirect('/');
            res.json(post);
        });
    }
    console.log(req.body);  
});


//PostList
router.get('/', function(req,res){
    PostsModel.find({}, function(err,posts){
        //아래는 화면 렌더링을 해주는것, 나는 리액트로보낼거니까 해당없음
        // res.render( 'admin/posts' , { 
        //     "posts" : posts
        // });
        if(err) throw err;
        res.send(posts);
        console.log(posts);
    });
});


//PostRead
router.get('/posts/detail/:id' , function(req, res){
    //url 에서 변수 값을 받아올떈 req.params.id 로 받아온다
    //find One 은 레코드를 하나만 받아온다 
    PostsModel.findOne( { 'id' :  req.params.id } , function(err ,posts){
        // //제품정보를 받고 그안에서 댓글을 받아온다.(해당 제품에 대한 댓글만)
        // CommentsModel.find({ product_id : req.params.id } , function(err, comments){
        //     res.render('admin/productsDetail', { product: product , comments : comments });
        // });
        res.send(posts);
    });
});


//PostDelete
router.get('/posts/delete/:id', function(req, res){
    PostsModel.remove({ id : req.params.id }, function (err) { 
        res.redirect('/');
     });
});

module.exports = router;