import mongoose from 'mongoose';
import ministrySchema from './MinistrySchema'
import discipleshipSchema from './DiscipleshipSchema'

const userSchema = new mongoose.Schema({
        //유저 몽고 id 
        userObejctId: mongoose.Types.ObjectId,
        // 유저 이름
        name: String,
        // 유저 이메일
        email: String,
        // 생년 월일
        birthDay: Date,
        // 휴대폰 번호
        phoneNumber: String,
        // 등록일
        registerDate: Date,
        // 제자반 여부
        discipleship: discipleshipSchema,
        // 소속 GBS
        GBS_ObjectId: mongoose.Types.ObjectId,
        // 소속 LBS
        LBS_ObjectId: mongoose.Types.ObjectId,
        // 사역
        ministry: [ ministrySchema ]
    },
    {
        timestamps:true
    }
);

const User = mongoose.model( 'User', userSchema );
export default User;