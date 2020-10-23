import Account from '../../model/Account/Account';

async function find({query={}}){
    console.log(query);
    return Account.find(query)
}

async function findOne({ query ={}, filed ={} }){
    return Account.findOne(query).select(filed)
}

async function save({ account }){
    return account.save();
}

export default{
    find,
    findOne,
    save
}