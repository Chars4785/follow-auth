import express from 'express'   
import accountRepository from '../../repository/account/acoount'
import token from '../../infra/follow-auth';
const { JWT_SECRET_KEY } = process.env;

export default function AccountApp( router ){
    // const router = express.Router();
    router.get('/',(req,res)=>{
        res.send('asd')
    })
    router.get('/login', async (req,res)=>{
        const result = await accountRepository.find({
            query:{}
        });
        console.log(JWT_SECRET_KEY)
        console.log(result);
    })

    router.get('/login/:id', async( req,res )=>{
        const { id } = req.params;
        const data ={
            id,
        }
        const result = await token.signToken({ data })
        console.log(result);
        res.send("!")
    })

    return router;
}

