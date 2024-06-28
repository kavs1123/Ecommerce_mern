import mongoose from "mongoose";

const connDb = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_CONN)
        console.log(`Connected to database ${conn.connection.host}`)

    }
    catch(error){
        console.log(error)

    }

};

export default connDb;