const mongoose =require('mongoose');
const CommentSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required: true
    },
    created: {
        type:Date,
        default:Date.now()
    },
    published:{
      type: Boolean,
      default:1
    },
    createdBy:{
       type: mongoose.Schema.Types.ObjectId,ref:'User'
    },
    post:{ 
        type: mongoose.Schema.Types.ObjectId, ref: 'Posts' 
    }, 
    test:{ 
        type: String 
    } 
})
module.exports = mongoose.model('Comments',CommentSchema)