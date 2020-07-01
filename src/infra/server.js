import express from 'express'
import accountApp from '../app/account/account'
import _ from 'lodash'

const app = express()
const routerInstance = express.Router();

const routers =[
    accountApp
]

_.forEach( routers, ( router )=>{
    console.log("RR",router)
    app.use('/v1', router(routerInstance))
})


const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))