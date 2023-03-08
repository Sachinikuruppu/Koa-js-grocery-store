import {v4 as uuidv4} from "uuid";

const promotions=new Map();

//creates promotion
export const addpromotion=({name,description,offprice,season})=>{
    const promotion={id:uuidv4(),name,description,offprice,season}
    promotions.set(promotion.id,promotion);
    return promotion;
};

export const getpromoAll=()=>{
    
    return [...promotions.values()];
};


