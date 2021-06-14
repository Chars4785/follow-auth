import mongoose from 'mongoose';

// gbs, lbs 를 나눈다.
const scheduleSchema = new mongoose.Schema({
        
    },
    {
        timestamps:true
    }
);

const Schedule = mongoose.model( 'Schedule', scheduleSchema );
export default Schedule;