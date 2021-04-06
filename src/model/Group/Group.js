import mongoose from 'mongoose';
import userSchema from './userSchema'

// gbs, lbs 를 나눈다.
const groupSchema = new mongoose.Schema({
        // 그룹 타입 GBS,
        groupType: String,
        // 해당 시즌 
        seasonId: mongoose.Types.ObjectId,
        // 해당 리더 이름
        leaderId: mongoose.Types.ObjectId,
        // 소속 role leavel
        leavelId: mongoose.Types.ObjectId,
        // 그룹에 포함되어 있는 조원
        inCludeId: [ userSchema ],
    },
    {
        timestamps:true
    }
);

const Group = mongoose.model( 'Group', groupSchema );
export default Group;