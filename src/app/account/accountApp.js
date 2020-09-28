import express from 'express'   
import accountRepository from '../../repository/account/acoount'
import token from '../../infra/follow-auth';
const { JWT_SECRET_KEY } = process.env;
const Account = express.Router();

Account.post('/',(req,res)=>{
    res.send({
        message:'asd'
    })
    
})

Account.get('/login', async (req,res)=>{
    const result = await accountRepository.find({
        query:{}
    });
    console.log(JWT_SECRET_KEY)
    console.log(result);
})

Account.get('/login/:id', async( req,res )=>{
    const { id } = req.params;
    const data ={
        id,
    }
    const result = await token.signToken({ data })
    console.log(result);
    
})

Account.put('/account',async( req, res )=>{
    //아이디 비번 만들기
    
})

Account.post('/token', async( req, res ) => {
    
})

export default Account;


