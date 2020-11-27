import express from 'express'
import AccountRouter from '../app/account/accountRouter'
import bodyParser from 'body-parser';
import _ from 'lodash'
import cors from 'cors';
import signInToken from '../app/siginIn/signInToken'

const app = express();
require( 'dotenv' ).config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/sigin', signInToken);

const routers =[
    AccountRouter,
]

_.forEach( routers, ( router )=>{
    app.use('/v1', router)
})

app.use(function(err, req, res, next){
    console.log("HERE_ERROR",err);
    res.json({
        message:`시스템 에러`,
        error:err,
        code: 500
    })
})


export default app;