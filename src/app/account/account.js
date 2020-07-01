import express from 'express'
// const router = express.Router();

// router.get('/',(req,res)=>{
//     res.send('Router1');

// })
export default function accountApp( router ){
    console.log(router)
    router.get('/',(req,res)=>{
        res.send('Heel');
    })
}

// export default router;