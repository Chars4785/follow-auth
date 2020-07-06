import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:Array,
        required:true
    }

})

export default mongoose.model( 'Account', accountSchema );