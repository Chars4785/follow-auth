import express from 'express'   
import accountRepository from '../../repository/account/acoount'

export default function AccountApp( router ){
    // const router = express.Router();
    router.get('/',(req,res)=>{
        res.send('asd')
    })
    router.get('/login', async (req,res)=>{
        await accountRepository.find();
    })

    router.get('/login/:id',( req,res )=>{
    })
    return router;
}

