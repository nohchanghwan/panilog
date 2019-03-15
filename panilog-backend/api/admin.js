var express = require('express');
var router = express.Router();
var PostsModel = require('../models/PostsModel');

// router.get('/', function(req,res){
//     res.send('posts app');
// });



//[리스트]
router.get('/posts', function(req,res){
    
    PostsModel.find({}, function(err,posts){
        res.render( 'admin/posts' , { 
        "posts" : posts
        });
    });
});

module.exports = router;