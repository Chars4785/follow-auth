import Account from '../../model/Account/Account';

async function find({query={}}){
    console.log(query);
    return Account.find(query)
}

export default{
    find,
}