'use strict';
const Comments =require('../../models/Comments');
const jwt = require('jsonwebtoken');
// Create new comment
async function createComment(request, response) {  
    const usertoken = request.headers.authorization;
    const token = usertoken.split(' ');
    const decoded = jwt.verify(token[1], '12345');
    let { title, body,post } = request.body;
    try{
        let newComment = new Comments({
            title: title,
            body: body, 
            post: post,
            createdBy:decoded._id
        });
        let comment = await newComment.save();
        response.json(comment);
    }catch(error){
        response.json( error );
    } 
}


 //Get comment details
 async function getCommentDetails(request,response){
     try{
        const comment =await Comments.findOne({"_id":request.params._id})
        .populate('createdBy','email')
      //  .populate('post','title');
        response.json(comment);
     }catch(error){
         response.json(error);
     }
    
 }

 async function getAllCommentsByPostId(request,response){
     try{
        const comments =await  Comments.find({"post": request.params.post})
        .sort({'created': 'desc'})
        .populate('createdBy','email') 
       
        response.json(comments);
     }catch(error){
         response.json(error);
     }
    

 }

module.exports={
    createComment:createComment,
    getCommentDetails:getCommentDetails,
    getAllCommentsByPostId:getAllCommentsByPostId
}