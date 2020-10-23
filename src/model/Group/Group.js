import mongoose from 'mongoose';
import userSchema from './userSchema'

// gbs, lbs 를 나눈다.
const groupSchema = new mongoose.Schema({
        // 그룹 타입 GBS,
        groupType: String,
        // 그룹에 포함되어 있는 조원
        inCludeId: [ userSchema ]
        // 기간

    },
    {
        timestamps:true
    }
);

const Group = mongoose.model( 'Group', groupSchema );
export default Group;