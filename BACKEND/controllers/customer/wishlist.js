import {v4 as uuidv4} from "uuid";

const wishlists=new Map();

//creates promotion
export const addwishlist=({item,price,quantity})=>{
    const wishlist={id:uuidv4(),item,price,quantity}
    wishlists.set(wishlist.id,wishlist);
    return wishlist;
};

export const getwishlistAll=()=>{
    
    return [...wishlists.values()];
};


