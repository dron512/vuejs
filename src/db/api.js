import {datas} from './data.js';

export const findOne = id => {
    const findData = datas.cards.filter((data)=>{
        return data.id == id;
    })
    return findData[0];
}

export const insertData = data =>{
    datas.cards.push({
        id:datas.cards.length+1,
        text:data.text,
        title:data.title
    });
    console.log(datas);
}