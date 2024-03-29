import express from 'express'
import AccountRouter from '../app/account/accountRouter'
import UserRouter from '../app/user/userRouter';
import GroupRouter from '../app/group/GroupRouter';
import bodyParser from 'body-parser';
import _ from 'lodash'
import cors from 'cors';
import signInToken from '../app/siginIn/signInToken'
import SeasonRouter from '../app/season/seasonRouter';

const SERVICE_PRIFIX = '/follow-as';
const app = express();
require( 'dotenv' ).config();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`${SERVICE_PRIFIX}/v1/sign`, signInToken);

const routers =[
    AccountRouter,
    UserRouter,
    GroupRouter,
    SeasonRouter
]

_.forEach( routers, ( router )=>{
    app.use(`${SERVICE_PRIFIX}/v1`, router)
})

app.use((err, req, res, next)=>{
    console.error("===========> ERROR START <===========");
    console.log(err);
    console.error("===========> ERROR CODE END <===========");
    let defaultError = {
        message:`시스템 에러`,
        code: 500
    }
    if( err ){
        const { statusCode, message } = err
        defaultError.message = message
        defaultError.code = statusCode
    }
    res.status(defaultError.code).send(defaultError)
})

export default app;