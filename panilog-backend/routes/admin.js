var express = require('express');
var router = express.Router();
var PostsModel = require('../models/PostsModel');


router.get('/posts/write', function(req,res){
    res.send('posts app(post/write)확인');
});


//[리스트]
router.post('/posts/write', function(req,res){
    
    var post = new PostsModel({
        title : req.body.title,
        body : req.body.body,
        //[6]만약 파일요청이 있으면 저장하고 없으면 말아라
        //thumbnail : (req.file) ? req.file.filename : " ",
        tags : req.body.tags,
        //[7]추가 (작성시 로그인되어있는지확인)
        //username : req.user.username
    });
    console.log(req.body);
    post.save(function(err){
        res.redirect('/posts/write');
    });
});

module.exports = router;