import Account from '../../model/Account/Account';

async function find(){
    return Account.find({}, (err, result)=>{
        if(err) console.log("err",err)
        console.log("result",result);
    })
}


export default{
    find,
}