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
    },
    {
        timestamps:true
    }
);

const Account = mongoose.model( 'Account', accountSchema );
export default Account;