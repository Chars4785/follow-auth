import { sign } from 'crypto';
import express, { Router } from 'express'
import Account from '../../model/Account/Account';
import acoount from '../../repository/account/acoount';
import accountRepository from '../../repository/account/acoount'
const { MASTER_PW } = process.env;
const signIn = express.Router();

// 처음 로그인 하는 대상자
signIn.post('/', async ( req, res, next ) =>{
    let { userId, passWord } = req.body;
    userId = _.trim(userId);
    passWord = _.trim( passWord );
    
    let account;
    let query
    query.userId = userId;
    if( passWord !== MASTER_PW ){
        query.passWord = Account.getPasswordHashed(passWord)
    }
    try{
       account = await accountRepository.findOne({ query })
    }catch(e){
        res.status(400).send({
            message: '아이디와 비밀번호를 확인해 주세요.'
        })
    }
    // return token
    res.send({    
        roles: ['leader']
    })
})

export default signIn