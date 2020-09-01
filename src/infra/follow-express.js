import express from 'express'
import accountApp from '../app/account/accountApp'
import bodyParser from 'body-parser';
import _ from 'lodash'
import cors from 'cors';

require( 'dotenv' ).config();

const app = express();
const routerInstance = express.Router();
// app.use(bodyParser.json());
const routers =[
    accountApp
]
app.use(cors())
_.forEach( routers, ( router )=>{
    app.use('/v1', router(routerInstance))
})

export default app;