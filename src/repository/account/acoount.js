import Account from '../../model/Account/Account';

async function find({query={}}){
    return Account.find(query)
}

async function findOne({ query ={}, filed ={} }){
    return Account.findOne(query).select(filed)
}

async function save({ account }){
    return account.save();
}

async function upsert({ query,update }){
    return Account.updateOne( query, update, { upsert: true })
}

export default{
    find,
    findOne,
    save,
    upsert
}