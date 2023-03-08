//assigns unique ID
import { v4 as uuidv4 } from "uuid";
//uses maps to store data temporarily
const cusprofiles= new Map();


//create customer profile
export const addcusprofile=({name,gender,hometown,email})=>{
    const cprofile={id:uuidv4(),name,gender,hometown,email}
    cusprofiles.set(cprofile.id,cprofile);
    return cprofile;
};
//get all customers
export const getAllcust=()=>{
    
    return [...cusprofiles.values()];
};