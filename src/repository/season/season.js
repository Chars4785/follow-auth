import Season from '../../model/Season/Season';

async function find({ query = {},fields = {}, paging = false, skip = 0, limit = 0 }){
    if( paging ){
        skip = (skip - 1) * limit
    }
    return Season.find( { ...query }, fields, { skip, limit })
}

async function findOne({ query ={}, filed ={} }){
    return Season.findOne(query).select(filed)
}

async function save({ season }){
    return season.save();
}

async function upsert({ query,update }){
    return Season.updateOne( query, update, { upsert: true })
}

// findOneandUpdate()

async function deleteOne({ season }) {
    season.deletedAt = new Date();
    return season.save();
}


export default{
    find,
    findOne,
    save,
    upsert,
    deleteOne
}