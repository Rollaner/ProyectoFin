import  mongoose, { ConnectionOptions } from "mongoose";

function connect(): Promise<typeof mongoose> {
    const mongoURI = 'mongodb+srv://Serqlo:hpKSuy71T4bz8BES@cluster0.y81lt.mongodb.net'
    const nameDatabase = 'dev-ecommerce';

    const mongooseOptions: ConnectionOptions = { 
        useNewUrlParser: true , 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false
    }
    return mongoose.connect(mongoURI + '/' + nameDatabase, mongooseOptions)
}

export default {connect}