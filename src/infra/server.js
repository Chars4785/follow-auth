import express from 'express'
import accountApp from '../app/account/accountApp'
import _ from 'lodash'

const port = 3000;
const app = express();
const routerInstance = express.Router();

const routers =[
    accountApp
]

_.forEach( routers, ( router )=>{
    app.use('/v1', router(routerInstance))
})

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.listen(port, () =>{
    console.log(`START PORT IS ${port}`)
});