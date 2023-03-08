//assigns unique ID
import { v4 as uuidv4 } from "uuid";
//uses maps to store data temporarily
const adprofiles= new Map();


//create admin profile
export const addadminprofile=({name,gender,hometown,email})=>{
    const adprofile={id:uuidv4(),name,gender,hometown,email}
    adprofiles.set(adprofile.id,adprofile);
    return adprofile;
};

