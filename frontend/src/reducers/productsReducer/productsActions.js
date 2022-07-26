// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



// // export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
// //     const { data } = await axios.get("http://localhost:5000/api/v1/products");
// //     return data;
// // })


// export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async ({keyWord="",page=1,limit=3}) => {
//     try {
//         const link = `http://localhost:5000/api/v1/products?keyword=${keyWord}&page=${page}&limit=${limit}`
//         const { data } = await axios.get(link);
//         return data;
//     } catch (err) {
//         return err.message;
//     }
// })



// export const fetchProductById = createAsyncThunk("productDetails/fetchProductById", async (id) => {
//     try {
//         const { data } = await axios
//         .get(`http://localhost:5000/api/v1/product/${id}`);
//         return data.product;
//     } catch (err) {
//         return err.message;
//     }
// })









import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
//     const { data } = await axios.get("http://localhost:5000/api/v1/products");
//     return data;
// })


export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async ({keyWord="",page=1,limit=3,price=[0,25000],ratings=0,category}) => {
    try {
        let link = `http://localhost:5000/api/v1/products?keyword=${keyWord}&page=${page}&limit=${limit}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
        if(category){
            link += `&category=${category}`
        }
        const { data } = await axios.get(link);
        return data;
    } catch (err) {
        return err.message;
    }
})



export const fetchProductById = createAsyncThunk("productDetails/fetchProductById", async (id) => {
    try {
        const { data } = await axios
        .get(`http://localhost:5000/api/v1/product/${id}`);
        return data.product;
    } catch (err) {
        return err.message;
    }
})