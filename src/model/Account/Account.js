import mongoose from 'mongoose';
import crypto from 'crypto';

// 고객에 대한 정보
// 나중에 어떤 교회에 포함인지, 어디 소속인지에 따라서 나눠야 한다.
const accountSchema = new mongoose.Schema({
       userId:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        belongTo:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

accountSchema.statics.getPasswordHashed = (password) =>{
    return crypto.createHash( 'sha512' ).update( password ).digest( 'base64' );
}

const Account = mongoose.model( 'Account', accountSchema );
export default Account;