import * as Mongoose from "mongoose";


 const connectdb = async ()=> {
    
    if(Mongoose.connections[0].readyState){

     
    }
    
  await Mongoose.connect('mongodb+srv://sachin:1234@cluster.pjp3xam.mongodb.net/test').catch(err => console.log(err));
  console.log("Mongoose Connection Established");

 
  
}
export default connectdb