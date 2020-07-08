import express from 'express'
import accountApp from '../app/account/accountApp'
import _ from 'lodash'
require('dotenv').config();

const app = express();
const routerInstance = express.Router();

const routers =[
    accountApp
]

_.forEach( routers, ( router )=>{
    app.use('/v1', router(routerInstance))
})

export default app;