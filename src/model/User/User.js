import mongoose from 'mongoose';
import ministrySchema from './ministrySchema'
import discipleshipSchema from './discipleshipSchema'

const userSchema = new mongoose.Schema({
        // 유저 이름
        name: String,
        // 권한
        status: mongoose.Types.ObjectId,
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
        // 졸업일
        graduatedDate: Date,
        // 주소
        address: String,
        // 제자반 여부
        isDisciple: discipleshipSchema,
        // 삭제 날짜
        deletedAt: Date,
    },
    {
        timestamps:true
    }
);

const User = mongoose.model( 'User', userSchema );
export default User;