import _ from 'lodash';
import mongoose from 'mongoose';
import userSchema from './userSchema'

export const GROUP_TYPE ={
    GBS:'GBS',
    LBS:'LBS',
    MANAGER:'MANAGER'
}

// gbs, lbs 를 나눈다.
const groupSchema = new mongoose.Schema({
        // 그룹 타입 GBS,
        groupType: {
            type:String,
            enum: _.keys(GROUP_TYPE)
        },
        // 해당 시즌 
        seasonId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        // 해당 리더 이름
        managerId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        // 그룹에 포함되어 있는 조원
        users: [ userSchema ],
    },
    {
        timestamps:true
    }
);

const Group = mongoose.model( 'Group', groupSchema );
export default Group;