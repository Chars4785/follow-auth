import mongoose from 'mongoose';

// gbs, lbs 를 나눈다.
const seasonSchema = new mongoose.Schema({
        // season 이름: 2021년 1학기
        name:String,
        // 시작 기간
        startDate: Date,
        // 끝나는 기간
        endDate: Date,
    },
    {
        timestamps:true
    }
);

const Season = mongoose.model( 'Season', seasonSchema );
export default Season;