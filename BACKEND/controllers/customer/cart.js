import {v4 as uuidv4} from "uuid";

const carts=new Map();

//creates promotion
export const addcart=({item,price,quantity})=>{
    const cart={id:uuidv4(),item,price,quantity}
    carts.set(cart.id,cart);
    return cart;
};

export const getcartAll=()=>{
    
    return [...carts.values()];
};


