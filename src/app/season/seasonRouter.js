import express from 'express'   
import seasonRepository from '../../repository/season/season';
import groupRepository from '../../repository/group/group';
import token from '../../infra/follow-auth';
import Season from '../../model/Season/Season'
import Group, { GROUP_TYPE } from '../../model/Group/Group'
import { wrapper, router } from '../../util/wrapper';
import { STATUS_NAME } from '../../model/Status/Status'
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';
import _ from 'lodash';
import moment from 'moment'
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;
const { JWT_SECRET_KEY } = process.env;
const SeasonRouter = router();

/*
* summary: season list 가져오기
* param:
*/
SeasonRouter.get('/season/list',wrapper(async(req,res)=>{
    const { skip, limit, fields } = req.body
    const seasonList = await seasonRepository.find({ 
        paging:true,
        skip,
        limit,
        fields
    })
    res.send(seasonList);
}))

/*
* summary: season list 생성하기
*/
SeasonRouter.put('/season/list',wrapper(async(req,res,next) =>{
    const {
        name,
        startDate,
        endDate
    } = req.body
    if( moment(startDate) >= moment(endDate) ){
        next({
            message:'시작 날짜가 더 빠릅니다.',
            statusCode: 401
        })
        return;
    }
    const season = new Season({ name, startDate, endDate })
    await seasonRepository.save({ season })
    res.send({ error:false })
}))

/*
* summary: 특정 season 가져오기
* param:
*/
SeasonRouter.get('/season/:seasonId',wrapper(async(req,res,next)=>{
    const { seasonId } = req.params
    if( !ObjectID.isValid(seasonId) ){
        next({
            message:'올바른 season id 가 아닙니다.',
            statusCode: 401
        })
        return;
    }
    const season = await seasonRepository.find({
        query: { _id: seasonId }
    })
    res.send({ season });
}))

/*
* summary: 특정 season 수정
* param:
*/
const putSeasonbySeasonIdOptional = {
    seasonName: "1학기",
    startDate: 'moment',
    endDate: 'moment',
    group:[
        {
            leaderName: '이인선',
            groupType: 'LBS',
            superStatus:'GANSA',
            groupMember: [{
                "userId":"mongoId",
                "name":"이종민",
                "status":"LEADER"
            }] //MongoDb id
        },
        {
            leaderName: '이종민',
            groupType: 'GBS',
            superStatus:'CODI',
            groupMember: [{
                "userId":"mongoId",
                "name":"이종민",
                "status":"LEADER"
            }] //MongoDb id
        },
        {
            leaderName: '이순종',
            groupType: 'MANAGER',
            superStatus:'MASTER',
            groupMember: [{
                "userId":"mongoId",
                "name":"이종민",
                "status":"EDU_GANSA"
            }] //MongoDb id
        }
    ],
}

SeasonRouter.put('/season/:seasonId',wrapper(async(req,res)=>{
    const { seasonId } = req.params.seasonId
    const {
        seasonName,
        startDate,
        endDate,
        lbsGroup,
        gbsGroup,
        ganaGroup
    } = req.body
    const season = await seasonRepository.find({ query: { _id: seasonId } });
    if( !season ){
        next({ message:'값이 존재 하지 않습니다.' })
        return;
    }
    res.send({
        message:'!'
    });
}))

/*
* summary: 특정 season 삭제
* param:
*/
SeasonRouter.delete('/season/:seasonId',wrapper(async(req,res)=>{
    const { seasonId } = req.params
    const query = { _id: seasonId };
    const season = await seasonRepository.findOne({ query })
    if( !season ){
        next({
            message:'이미 삭제된 값입니다.',
            statusCode:401
        })
        return;
    }
    await seasonRepository.deleteOne({ season })
    res.send({
        error:false
    });
}))



export default SeasonRouter;


//
//  findOne에서 deletedAt 은 제외 하고 하기
// 