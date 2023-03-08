import {v4 as uuidv4} from "uuid";

const purchases=new Map();

//creates promotion
export const addpurchase=({item,quantity,total})=>{
    const purchase={id:uuidv4(),item,quantity,total}
    purchases.set(purchase.id,purchase);
    return purchase;
};

export const getAllpurchases=()=>{
    
    return [...purchases.values()];
};


