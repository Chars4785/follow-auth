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
        },
    },
    {
        timestamps:true
    }
);

accountSchema.statics.getPasswordHashed = (password) =>{
    return crypto.createHash( 'sha512' ).update( password ).digest( 'base64' );
}

accountSchema.post( 'findOne', ( document ) => {
    let message;
    if ( !document ) {
        message = '계정정보를 찾을수없습니다.';
    } 
    // else if ( document.refs && document.refs.userId && document.deletedAt ) {
    //     // staff는 탈퇴된계정을 복구할수있다, 고객 계정정보만 걸러야한다.
    //     message = '이미 탈퇴된 계정입니다.';
    // }
    if ( message ) {
        const error = new Error( message );
        error.statusCode = 400;
        error.isIntend = true;
        throw error;
    }
});

const Account = mongoose.model( 'Account', accountSchema );
export default Account;