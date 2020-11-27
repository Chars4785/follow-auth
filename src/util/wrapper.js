import express from 'express';
import _ from 'lodash';
import middlewares from './middleware';

export function wrapper(asyncFun){
    return (async( req,res,next )=>{
        try{
            return await asyncFun(req, res, next);
        }catch(error){
            return next(error);
        }
    })
}

export function router( middleNames ){
    let middleware = [
        middlewares.checkToken,
    ]
    if( !_.isEmpty(middleNames)){
        _.forEach(middleNames,(name)=>{
            middleware.push(middlewares[name]);
        })
    }
    const initRouter = express.Router();
    return initRouter.use(middleware)
}