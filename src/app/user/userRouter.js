import express from 'express'   
import userRepository from '../../repository/user/user';
import token from '../../infra/follow-auth';
import User from '../../model/User/User'
import { wrapper, router } from '../../util/wrapper';
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';
import _ from 'lodash';

const { JWT_SECRET_KEY } = process.env;
const UserRouter = router();

UserRouter.get('/user/users',wrapper(async(req,res)=>{
    let { fields, page, sort, limit, queryName, value } = req.query;
    const newQuery = !value ? {} : {
        [queryName]:value
    }
    const userList = await userRepository.find({ query:newQuery, fields, page, sort, limit })
    const usersCount = await userRepository.count({ query:newQuery })
    res.send({
        users: userList,
        documentsCount:usersCount
    });
}))

UserRouter.get('/user/userInfo',wrapper( async ( req,res ) =>{
    const { query } = req;
    const userInfo = await userRepository.findOne({ query })
    res.send({
        userInfo,
    })
}))

/*
* summary: 해당 기간 유저 정보 모두 가져오기 ( 졸업자 제외, )
*/
UserRouter.get('/user/list',wrapper( async ( req, res ) =>{
    const users = await userRepository.find({ 
        fields: { name:1 }
    })
    res.send(users)
}))
export default UserRouter;


