import mongoose from 'mongoose';

// gbs, lbs 를 나눈다.
const seasonSchema = new mongoose.Schema({
        // season 이름: 2021년 1학기
        name:{
            type: String,
            require:true
        },
        // 시작 기간
        startDate:{
            type:Date,
            require:true
        },
        // 끝나는 기간
        endDate:{
            type:Date,
            require:true
        },
        // 적용중인지 체크
        apply:{
            type:Boolean,
            default:false
        },
        // 삭제 날짜
        deletedAt: {
            type:Date,
            default: null
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Season = mongoose.model( 'Season', seasonSchema );
export default Season;