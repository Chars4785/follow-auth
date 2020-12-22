import express from 'express'   
import accountRepository from '../../repository/account/acoount';
import userRepository from '../../repository/user/user';
import token from '../../infra/follow-auth';
import Account from '../../model/Account/Account';
import { wrapper, router } from '../../util/wrapper';
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';

const { JWT_SECRET_KEY } = process.env;
const AccountRouter = router();

AccountRouter.post('/',((req,res)=>{
    console.log(req.decode)
    res.send({
        message:'/'
    })
}))

AccountRouter.get('/login', wrapper(async (req,res)=>{
    const result = await accountRepository.find({
        query:{}
    });
    console.log(JWT_SECRET_KEY)
    console.log(result);
}))

AccountRouter.get('/login/:id', wrapper(async( req,res )=>{
    const { id } = req.params;
    const data ={
        id,
    }
    const result = await token.signToken({ data })
    console.log(result);
    
}))

AccountRouter.post('/createAccount',wrapper(async( req, res )=>{
    const { password, userId, belongTo, ...restInfo } = req.body;
    try{
        const result = await accountRepository.findOne({
            query: {
                userId
            },
        })
        if( result ){
            res.status( 404 ).send({
                message: '이미 존재하는 아이디 입니다.'
            })
            return;
        }
    }catch(e){}
    const accountId = new ObjectID();
    const hasedPassword = Account.getPasswordHashed( password );
    const accountInfo = { 
        accountId:accountId,
        userId,
        password:hasedPassword,
        belongTo 
    }
    const newAccount = new Account( accountInfo )
    const newUser = { 
        _id:accountId,
        ...restInfo 
    };
    await accountRepository.save({ account: newAccount })
    await userRepository.upsert({ query: { _id: accountId }, update: { $set: newUser } })
    res.send({ accountId:newAccount._id })
}))


AccountRouter.get('/userInfo',wrapper(async(req, res)=>{
    console.log(req.decoded)
    res.send({
        userId:'whdals',
    })
}))

export default AccountRouter;


