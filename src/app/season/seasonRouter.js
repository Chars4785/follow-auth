import express from 'express'   
import seasonRepository from '../../repository/season/season';
import groupRepository from '../../repository/group/group';
import token from '../../infra/follow-auth';
import Season from '../../model/Season/Season'
import { GROUP_TYPE } from '../../model/Group/Group'
import { wrapper, router } from '../../util/wrapper';
import { STATUS_NAME } from '../../model/Status/Status'
import { signToken } from '../../infra/follow-auth';
import { ObjectID } from 'mongodb';
import _ from 'lodash';

const { JWT_SECRET_KEY } = process.env;
const SeasonRouter = router();

/*
* summary: season 모든 리스트 가져오는 api
* param:
*/
SeasonRouter.get('/season/list',wrapper(async(req,res)=>{
    const seassonList = await seasonRepository.find()
    res.send({ seassonList });
}))

/*
* summary: 특정 season 가져오기
* param:
*/
SeasonRouter.get('/season/:seasonId',wrapper(async(req,res)=>{
    const { seasonId } = req.parmas.seasonId
    const season = await seasonRepository.find({
        query: { _id: seasonId }
    })
    res.send({ season });
}))

/*
* summary: 특정 season 업데이트
* param:
*/
SeasonRouter.post('/season/:seasonId',wrapper(async(req,res)=>{
    const { seasonId } = req.parmas.seasonId
    res.send({
        message:'!'
    });
}))

/*
* summary: 특정 season 생성
* param:
*/
SeasonRouter.put('/season',wrapper(async(req,res)=>{
    const {
        groupName,
        startDate,
        endDate,
        groupMember,
        lbsInfo
    } = req.body
    const { gbs_member, name:lbsInfo ,status } = lbsInfo
    const season = new Season({ name, startDate, endDate })
    const newSeason = await seasonRepository.save({ season });
    // const statusType = STATUS_NAME.
    const gansaGroup = await groupRepository.save({ 
        groupType:GROUP_TYPE.MANAGER,
        seasonId: season._id,
     })
    
    console.log("!!",newSeason);
    
    res.send({
        message:'!'
    });
}))

/*
* summary: 특정 season 삭제
* param:
*/
SeasonRouter.delete('/season/:seasonId',wrapper(async(req,res)=>{
    const { seasonId } = req.parmas.seasonId
    res.send({
        message:'!'
    });
}))



export default SeasonRouter;


