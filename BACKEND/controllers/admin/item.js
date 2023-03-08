import {v4 as uuidv4} from "uuid";

const items=new Map();

//creates item 
export const additem=({name,description,price,type})=>{
    const item={id:uuidv4(),name,description,price,type}
    items.set(item.id,item);
    return item;
};

//edit item: update item details
export const updateitem=(id,{name,description,price,type})=> {
    if(!items.has(id)){
        throw new Error("Item not found");
    }else{
        const item={id,name,description,price,price,type};
        items.set(item.id, item);
        return item;
    }
};

//edit item: delete item details
export const deleteitem=(id)=> {
    items.delete(id);
};

//get all items
export const getitemsAll=()=>{
    
    return [...items.values()];
};

