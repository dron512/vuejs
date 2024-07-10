import axios from "axios";

// 알콜목록 가져오기
export const findAll = async()=>{
    const category = '위스키';
    try{
        const res = await axios.get(`http://localhost:8081/search/category?category=${category}`);
        return res.data;
    }catch(err){
        console.log(err);
    }
}
// 알콜한개 가져오기
export const findOne = async(code)=>{
    const formData = new FormData();
    formData.append('code',code);
    try{
        const res = await axios.post(`http://localhost:8081/detail`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export const findMarket = async(code)=>{
    const formData = new FormData();
    formData.append('code',code);
    try{
        const res = await axios.post(`http://localhost:8081/detail/market`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    }catch(err){
        console.log(err);
    }
}