import mongoose from 'mongoose';

const ministrySchema = new mongoose.Schema({
        ministryName:String,
        ministryObjectId: mongoose.Types.ObjectId,
    },
    {
        timestamps:true
    }
);

export default ministrySchema;