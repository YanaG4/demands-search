import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
    products: [],
    status: 'idle',
    error: null,
}

export const fetchAllProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('products.json')
    const products = await Promise.all(
        response.data.map(async (product) => {
            return { ...product, id: nanoid() }
        })
    )

    return products
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