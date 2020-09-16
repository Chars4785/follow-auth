import mongoose from 'mongoose';
import crypto from 'crypto';

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

accountSchema.static.getPasswordHashed = (password) =>{
    return crypto.createHash( 'sha512' ).update( password ).digest( 'base64' );
}

const Account = mongoose.model( 'Account', accountSchema );
export default Account;