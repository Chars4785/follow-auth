import express from 'express'   
import accountRepository from '../../repository/account/acoount'
import token from '../../infra/follow-auth';
const { JWT_SECRET_KEY } = process.env;

export default function AccountApp( router ){
    // const router = express.Router();
    router.post('/',(req,res)=>{
        res.send({
            message:'asd'
        })
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
        
    })

    router.put('/account',async( req, res )=>{
        //아이디 비번 만들기
        
    })

    router.post('/token', async( req, res ) => {
        
    })

    return router;
}

