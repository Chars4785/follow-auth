import express from 'express'   
import accountRepository from '../../repository/account/acoount'
import token from '../../infra/follow-auth';
import Account from '../../model/Account/Account';
import { wrapper, router } from '../../util/wrapper';

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

AccountRouter.put('/createAccount',wrapper(async( req, res )=>{
    const { password, userId, belongTo, ...accountInfo } = req.body;
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
    console.log(password);
    console.log(typeof(password))
    const hasedPassword = Account.getPasswordHashed( password );
    const newAccount = new Account({ 
        userId, 
        password:hasedPassword,
        belongTo
    })
    // await userRepository.save({ 
    //     accountId: newAccount._id,
    //     ...accountInfo
    // })
    await accountRepository.save({ account: newAccount });
    res.send({ accountId:newAccount._id })
}))

AccountRouter.post('/token', wrapper(async( req, res ) => {
    
}))

export default AccountRouter;


