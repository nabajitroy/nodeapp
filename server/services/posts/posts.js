'use strict';
const Posts =require('../../models/Posts');
const jwt = require('jsonwebtoken');
// Create new posts
async function createPost(request, response) {  
    const usertoken = request.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], '12345');
    let { title, body,tags} = request.body;
    try{
        let newPost = new Posts({
            title: title,
            body: body,
            tags:tags,
            createdBy:decoded._id
        });
        let post = await newPost.save();
        response.json(post);
    }catch(error){
        response.json( error );

    }
     
}

// Get all posts
async function  getPosts(request, response) {  
    try{
        let posts =await Posts.find().populate('createdBy','email');
        response.json(posts); 

    }catch(error){
        response.json(  error ); 
    }
    
 }
// Get specfic posts
 async function getPostById(request,response){
     try{
        let posts =await Posts.findOne({"_id":request.params._id})
        .populate('createdBy',['email','role']);
        response.json(posts); 

    }catch(error){
        response.json(  error ); 
    }
 }

// update specfic  posts
 async function updatePostById(request, response){
     let {title,body,tags}=request.body;

      try{
        let updatedPost = await Posts.findByIdAndUpdate(request.params._id,{
          title:title,
          body:body,
          tags:tags,
          updated:Date.now()  
         },
         {new: true}
        )
        response.json(updatedPost);
      }catch(error){
        response.json( error );
   }
 
  }
 //delete a post
  async function deletePostById(request,response){
    try{
        await Posts.findByIdAndRemove(request.params._id);
        response.json("Post deleted successfully");

       }catch(error){
       response.json(  error );
      }
    }
module.exports = {  
    createPost: createPost,
    getPosts: getPosts,
    getPostById: getPostById,
    updatePostById:updatePostById,
    deletePostById:deletePostById
};