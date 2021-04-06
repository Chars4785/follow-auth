import User from '../../model/User/User';

async function find({ query = {}, fields = {}, page = 1, sort = {}, limit = 0 }){
    const skip = limit * ( page - 1 );
    let cursor = User.find( query )
                    .select( fields )
                    .sort( sort )
                    .skip( skip )
                    .limit( parseInt( limit, 10 ) );
    const user = cursor.exec();
    return user
}

async function count(query){
    return User.countDocuments(query);
}

async function findOne({ query ={}, filed ={} }){
    return User.findOne(query).select(filed)
}

async function save({ user }){
    return user.save();
}

async function upsert({ query, update }) {
    return User.updateOne(query,update, { upsert:true })
}

export default{
    find,
    findOne,
    save,
    upsert,
    count
}