import mongoose from 'mongoose';
import _ from 'lodash'
//  role에 대한 이야기는 관리자 이런 식으로 나눠야 한다.

export const STATUS_NAME ={
    // 간사
    GANSA: '간사',
    // 코디
    CODI: '코디',
    // 리더
    LEADER: '리더',
    // 조원
    MEMBERS: '조원',
    // 관리자
    MATSER: '관리자'
}

const StatusSchema = new mongoose.Schema({
        status:{
            type:String,
            enum: _.keys(STATUS_NAME)
        },
        statusName:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);

const Status = mongoose.model( 'Status', StatusSchema );
export default Status;