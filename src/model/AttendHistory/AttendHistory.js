import _ from 'lodash';
import mongoose from 'mongoose';

export const ATTEND_STATUS ={
    // 참석
    ATTEND:'ATTEND',
    // 불참
    ABSENT:'ABSENT',
    // 온라인 참석
    ONLINE_ATTEND:'ONLINE_ATTEND'
}

// gbs, lbs 를 나눈다.
const attendHistory = new mongoose.Schema({
        //해당 시즌
        seasonID: mongoose.Types.ObjectId,
        // 출석 체크 한 유저 아이디
        userID:mongoose.Types.ObjectId,
        // 출석 체크 한 유저가 속한 그룹
        groupID:mongoose.Types.ObjectId,
        // 출석 여부
        attend: {
            type:String,
            enum: _.key( ATTEND_STATUS )
        },
        // 불참 이유
        absentReasone: String,
        // 출석 체크 날짜
        attendCheckDate: Date
    },
    {
        timestamps:true
    }
);

const AttendHistroy = mongoose.model( 'AttendHistroy', attendHistory );
export default AttendHistroy;