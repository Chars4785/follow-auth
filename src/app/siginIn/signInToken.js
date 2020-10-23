import { sign } from 'crypto';
import express, { Router } from 'express'
import Account from '../../model/Account/Account';
import accountRepository from '../../repository/account/acoount'
import { signToken } from '../../infra/follow-auth';

const { MASTER_PW } = process.env;
const signIn = express.Router();

// 처음 로그인 하는 대상자
signIn.post('/signIn', async ( req, res, next ) =>{
    let { userId, password } = req.body;
    userId = _.trim(userId);
    password = _.trim( password );
    
    let account;
    let query
    query.userId = userId;
    if( password !== MASTER_PW ){
        query.password = Account.getPasswordHashed(password)
    }
    try{
       account = await accountRepository.findOne({ query })
    }catch(e){
        res.status(400).send({ message: '아이디와 비밀번호를 확인해 주세요.' })
        return;
    }
    const authentication = await signToken({ data:account });
    res.send({    
        belongTo:account.belongTo,
        ...authentication,
    })
})

export default signIn