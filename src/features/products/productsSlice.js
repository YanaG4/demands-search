import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    status: 'idle',
    error: null,
}

export const fetchAllProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('products.json')
    return response.data
})

const postsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchAllProducts.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, products: payload, status: 'success' }
        },
    }
})

export default postsSlice.reducer

export const getAllProducts = (state) => state.products.products
export const getProductsStatus = (state) => state.products.status