import mongoose from 'mongoose';
import ministrySchema from './ministrySchema'
import discipleshipSchema from './discipleshipSchema'

const userSchema = new mongoose.Schema({
        //유저 몽고 id 
        accountId: mongoose.Types.ObjectId,
        // 유저 이름
        name: String,
        // 유저 이메일
        email: String,
        // 유저 아이디
        userId: String,
        // 생년 월일
        birthDay: Date,
        // 휴대폰 번호
        phoneNumber: String,
        // 등록일
        registerDate: Date,
        // 제자반 여부
        isDisciple: discipleshipSchema,
        // 소속 GBS
        GBS_ObjectId: mongoose.Types.ObjectId,
        // 소속 LBS
        LBS_ObjectId: mongoose.Types.ObjectId,
        // 사역
        ministry: [ ministrySchema ],
        // 권한
        roles: {
            type: Array,
        }
    },
    {
        timestamps:true
    }
);

const User = mongoose.model( 'User', userSchema );
export default User;