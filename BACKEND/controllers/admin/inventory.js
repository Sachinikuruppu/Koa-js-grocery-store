import { v4 as uuidv4 } from "uuid";

const inventory= new Map();
//add safety stock details to inventory
export const addsafetystock=({name,type,description,quantity})=>{
    const sstock={id:uuidv4(),name,type,description,quantity}
    inventory.set(sstock.id,sstock);
    return sstock;
};

//getallsafetystockdetails
export const getsstockall=()=>{
    
    return [...inventory.values()];
};