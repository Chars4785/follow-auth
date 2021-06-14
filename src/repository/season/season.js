import Season from '../../model/Season/Season';

async function find({query={}}){
    return Season.find(query)
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

export default{
    find,
    findOne,
    save,
    upsert
}