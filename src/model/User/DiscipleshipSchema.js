import mongoose from 'mongoose';

const discipleshipSchema = new mongoose.Schema({
        // 제자반 이름
        discipleshipName:String,
        // 제자반 아이디
        discipleshipObjectId: mongoose.Types.ObjectId,
        // 제자반 시작
        createdAt: {
            type: Date,
            required: true,
        },
        // 제자반 수료
        finishedAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps:true
    }
);

export default discipleshipSchema;