import express from 'express'   
import userRepository from '../../repository/user/user';
import token from '../../infra/follow-auth';
import User from '../../model/User/User'
import { wrapper, router } from '../../util/wrapper';
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';
import _ from 'lodash';
import moment from 'moment';

const { JWT_SECRET_KEY } = process.env;
const UserRouter = router();

UserRouter.get('/user/users',wrapper(async( req, res)=>{
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
    const { 
        startDate,
        endDate,
        fields,
        sort,
        limit,
        skip
    } = req.body
    let query = {}
    if( !_.isUndefined(startDate) && !_.isUndefined(endDate) && startDate < endDate ){
         query ={
            'registerDate':{
                '$gte':startDate,
                '$lte':endDate
            }
        }
    }
    const users = await userRepository.find({ 
        query,
        fields
    })
    res.send(users)
}))
export default UserRouter;


// {
//     "startDate":"2021-01-01T00:24:02+09:00",
//     "endDate":"2021-01-10T00:24:02+09:00",
//     "fields":{
//         "name":1
//     }
// }