import express from 'express'
import AccountRouter from '../app/account/accountRouter'
import bodyParser from 'body-parser';
import _ from 'lodash'
import cors from 'cors';
import signInToken from '../app/siginIn/signInToken'

const SERVICE_PRIFIX = '/follow-as';
const app = express();
require( 'dotenv' ).config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/sigin', signInToken);

const routers =[
    signInToken,
    AccountRouter,
]

_.forEach( routers, ( router )=>{
    app.use(`${SERVICE_PRIFIX}/v1`, router)
})

app.use((err, req, res, next)=>{
    console.log("HERE_ERROR",err);
    res.status(500).send({
        message:`시스템 에러`,
        error:err,
        code: 500
    })
})

export default app;