import mongoose from 'mongoose';
import _ from 'lodash'
//  role에 대한 이야기는 관리자 이런 식으로 나눠야 한다.

export const LEVEL_NAME ={
    // 간사
    GANSA:"GANSA",
    // 코디
    GODI:"GODI",
    // 리더
    LEADER: "LEADER",
    // 조원
    TEAM_MEMBERS:'TEAM_MEMBERS'
}

const levelSchema = new mongoose.Schema({
        seasonId: mongoose.Types.ObjectId,
        levelName: {
            type: String,
            enum: _.keys( LEVEL_NAME ),
        }
    },
    {
        timestamps:true
    }
);

const Level = mongoose.model( 'Level', levelSchema );
export default Level;