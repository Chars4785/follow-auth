import Group from '../../model/Group/Group';

async function find({query={}}){
    return Group.find(query)
}

async function findOne({ query ={}, filed ={} }){
    return Group.findOne(query).select(filed)
}

async function save({ group }){
    return group.save();
}

async function upsert({ query,update }){
    return Group.updateOne( query, update, { upsert: true })
}

export default{
    find,
    findOne,
    save,
    upsert
}