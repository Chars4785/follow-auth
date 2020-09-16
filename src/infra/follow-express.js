import express from 'express'
import accountApp from '../app/account/accountApp'
import bodyParser from 'body-parser';
import _ from 'lodash'
import cors from 'cors';
import checkToken from './follow-auth';
import signInToken from '../app/siginIn/signInToken'

require( 'dotenv' ).config();

const app = express();
const routerInstance = express.Router();
// app.use(bodyParser.json());
const routers =[
    accountApp
]
// app.use( checkToken );
app.use(cors())

//app noToken sigin
app.use('/v1/sigin', signInToken);

_.forEach( routers, ( router )=>{
    app.use('/v1', checkToken, router(routerInstance))
})

export default app;