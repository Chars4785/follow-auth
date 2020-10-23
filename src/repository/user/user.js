import User from '../../model/User/User';

async function find({query={}}){
    console.log(query);
    return User.find(query)
}

async function findOne({ query ={}, filed ={} }){
    return User.findOne(query).select(filed)
}

async function save({ user }){
    return user.save();
}

export default{
    find,
    findOne,
    save
}