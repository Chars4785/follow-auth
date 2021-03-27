import mongoose from 'mongoose';

const discipleshipSchema = new mongoose.Schema({
        // 제자 학교A    
        discipleshipA: Boolean,
        // 제자 학교 B
        discipleshipB: Boolean,
        // 제자반 이름
        discipleship: Boolean
    },{ _id: false }
);

export default discipleshipSchema;