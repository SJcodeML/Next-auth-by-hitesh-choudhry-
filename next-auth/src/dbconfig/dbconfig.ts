import { log } from "console";
import mongoose from "mongoose";

export default function (){
    
        try {
            
            mongoose.connect(process.env.MONGO_URI!);
            const connection = mongoose.connection;

            connection.on('connected', ()=> {
                console.log('MONGODB connected Successfully');
            })
            

            connection.on('error', (err) => {
                console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
                process.exit();
            })   
            
        } catch (error) {
            console.log("Something went wrong");
            console.log(error);
            
            
            
        }
    
}