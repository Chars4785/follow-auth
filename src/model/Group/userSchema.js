import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
        // 유저 Id
        userId: mongoose.Types.ObjectId,
        // 조원 이름
        name: String,
        // 상태
        status: mongoose.Types.ObjectId,
    },
    {
        timestamps:false,
        _id: false
    }
);

export default userSchema;