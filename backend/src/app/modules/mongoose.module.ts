import  mongoose, {ConnectionOptions}  from "mongoose";

function connect(): Promise<typeof mongoose>{
    const mongoUri = "Uri here";
    const DB = 'dev-FacnyStore';
    const mongooseOptions: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    return mongoose.connect(`${mongoUri}/${DB}`, mongooseOptions);
}

export default { connect };