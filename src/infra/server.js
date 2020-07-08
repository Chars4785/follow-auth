import _ from 'lodash'
import mongoose from 'mongoose';
import app from './follow-express';

const { PORT, MONGO_URI } = process.env;
const opt = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}
mongoose.connection.on('connected', ()=>{
    console.log("connnected")
})
mongoose.connection.on('disconnected', ()=>{
    console.log("Disconnect")
})
mongoose.connect( MONGO_URI, opt)
    .then( () =>{ 
        console.log('SuccessFully connected to mongodb') 
    })
    .catch( () =>{ 
        console.log('Failed connected to mongodb')
    })

app.listen(PORT, () =>{
    console.log(`START PORT IS ${PORT}`)
});

