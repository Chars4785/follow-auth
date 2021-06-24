import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
        // 유저 Id
        userId: mongoose.Types.ObjectId,
        // 조원 이름
        name: String,
        // 상태
        status:String,
    },
    {
        timestamps:false,
        _id: false,
        versionKey: false,
    }
);

export default userSchema;