import Status from '../../model/Status/Status';

async function find({query={}}){
    return Status.find(query)
}

async function findOne({ query ={}, filed ={} }){
    return Status.findOne(query).select(filed)
}

async function save({ status }){
    return status.save();
}

async function upsert({ query,update }){
    return Status.updateOne( query, update, { upsert: true })
}

export default{
    find,
    findOne,
    save,
    upsert
}