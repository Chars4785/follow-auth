import mongoose from 'mongoose';
import userSchema from './userSchema'

// 출석 체크
// 나머지는 프런트에서 날짜 지나면 등록 할수 없도록 하고, TMS에서는 변경 가능 하도록
const UserAttendance = new mongoose.Schema({
        // 그룹장 id
        userObjectId: mongoose.Types.ObjectId,
        // 출석 날짜
        attendDate: Date,
        // 출석 ObuectId
        attendDance: {
            //이름 
            name: String,
            // 몽고 아이디
            userId: mongoose.Types.ObjectId
        }
    },
    {
        timestamps:true
    }
);

const UserAttendance = mongoose.model( 'UserAttendance', UserAttendance );
export default UserAttendance;