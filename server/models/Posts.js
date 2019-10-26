const mongoose = require('mongoose'); 
const userSchema = require('./User').schema;
const PostsSchema = new mongoose.Schema({  
        title: {   
            type: String,
            lowercase: true, 
            required: true
        },  
        body: {
            type: String, 
            required: true
        }, 
        tags: { 
            type:Array
        },
        created: {
            type: Date,
            default: Date.now()
        },
        updated:{
            type: Date,
            default: Date.now()
        },
        createdBy:{ 
            type: mongoose.Schema.Types.ObjectId, ref: 'User' 
        } ,
        
    }
);
 
module.exports = mongoose.model('Posts', PostsSchema);