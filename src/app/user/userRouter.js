import express from 'express'   
import userRepository from '../../repository/user/user';
import token from '../../infra/follow-auth';
import User from '../../model/User/User'
import { wrapper, router } from '../../util/wrapper';
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';

const { JWT_SECRET_KEY } = process.env;
const UserRouter = router();

UserRouter.get('/users',wrapper(async(req,res)=>{
    console.log("user")
    const { fields, page, sort, limit } = req.query;
    const userList = await userRepository.find({ fields, page, sort, limit })
    const usersCount = await userRepository.count()
    console.log(fields, page, sort, limit)
    res.send({
        users: userList,
        documentsCount:usersCount
    });
}))

export default UserRouter;


