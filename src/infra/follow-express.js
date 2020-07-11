import express from 'express'
import accountApp from '../app/account/accountApp'
import _ from 'lodash'
import bodyParser from 'body-parser'

require( 'dotenv' ).config();

const app = express();
const routerInstance = express.Router();
// app.use(bodyParser.json());
const routers =[
    accountApp
]

_.forEach( routers, ( router )=>{
    app.use('/v1', router(routerInstance))
})

export default app;