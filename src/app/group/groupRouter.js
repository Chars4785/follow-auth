import express from 'express'   
import userRepository from '../../repository/user/user';
import token from '../../infra/follow-auth';
import User from '../../model/User/User'
import { wrapper, router } from '../../util/wrapper';
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';
import _ from 'lodash';

const { JWT_SECRET_KEY } = process.env;
const GroupRouter = router();

GroupRouter.put('/group',wrapper(async(req,res)=>{
    //console.log(req.body)
    //{ '0':
//    { key: '0', name: '이종민1', status: '', gbs_member: [ '이종민2' ] } }
// }
    console.log(req.body)
    res.send({
        message:'!'
    });
}))


export default GroupRouter;


