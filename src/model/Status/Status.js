import mongoose from 'mongoose';
import _ from 'lodash'
//  role에 대한 이야기는 관리자 이런 식으로 나눠야 한다.

export const STATUS_NAME ={
    // 코디
    CODI: 'CODI',
    // 리더
    LEADER:'LEADER',
    // 조원
    MEMBERS:'MEMBERS',
    // 관리자
    MATSER:'MATSER',
    // 교육 간사
    EDU_GANSA:'EDU_GANSA',
    // 새가족 간사
    NEWFAMILY_GANSA:'NEWFAMILY_GANSA',
    // 예배/선교 간사
    WORSHIP_GANSA:'WORSHIP_GANSA',
    // 양육/재정 간사
    NURTURE_GANSA:'NURTURE_GANSA',
    // 행정 간사
    ADMIN_GANSA:'ADMIN_GANSA'
}

const StatusSchema = new mongoose.Schema({
        // 상태
        status:{
            type:String,
            enum: _.keys(STATUS_NAME)
        },
        // 상태 이름
        statusName:{
            type:String,
            required:true
        },
        // 삭제 날짜
        deletedAt: Date,
    },
    {
        timestamps:true
    }
);

const Status = mongoose.model( 'Status', StatusSchema );
export default Status;