import express from 'express';
import checkToken from './middleware/checkToken';

export function wrapper(asyncFun){
    return (async( req,res,next )=>{
        try{
            return await asyncFun(req, res, next);
        }catch(error){
            return next(error);
        }
    })
}

export function router(){
    const initRouter = express.Router();
    return initRouter.use(checkToken)
}