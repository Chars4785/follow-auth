import express from 'express'   

export default function AccountApp( router ){
    // const router = express.Router();
    router.get('/',(req,res)=>{
        res.send('asd')
    })
    router.get('/login',(req,res)=>{
        res.send('login page')
    })
    
    return router;
}

