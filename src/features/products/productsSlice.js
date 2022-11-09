import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
    products: [],
    searchedProducts: [],
    categories: [],
    keyWords: '',
    chosenProduct: {},
    status: 'idle'
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

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            const { name, checked } = payload
            if (checked)
                state.categories = [...state.categories, name]
            else
                state.categories = state.categories.filter(category => category !== name)
        },
        setKeyWords: (state, { payload }) => {
            if (!payload)
                state.keyWords = ""
            state.keyWords = payload.toLowerCase()
        },
        searchProducts: (state) => {
            function searchByFilters(product) {
                if (!state.keyWords && !state.categories.length) {
                    return true
                }
                if (!state.keyWords) {
                    return state.categories.includes(product.category)
                }
                const tags = product.tags.join(' ').toLowerCase()
                if (!state.categories.length) {
                    return (product.productName.toLowerCase().includes(state.keyWords) || tags.includes(state.keyWords))
                }
                return state.categories.includes(product.category) && (product.productName.toLowerCase().includes(state.keyWords) || tags.includes(state.keyWords))
            }
            state.searchedProducts = state.products.filter(searchByFilters)
        },
        choseProduct: (state, { payload }) => {
            state.chosenProduct = payload
        },
    },
    extraReducers: {
        [fetchAllProducts.fulfilled]: (state, { payload }) => {
            const products = payload.sort((a, b) => {
                let aProductName = a.productName.toLowerCase(),
                    bProductName = b.productName.toLowerCase();
                if (aProductName < bProductName) {
                    return -1;
                }
                if (aProductName > bProductName) {
                    return 1;
                }
                return 0;
            });
            console.log("Fetched successfully");
            return { ...state, products: products, searchedProducts: products, status: 'success' }
        },
        [fetchAllProducts.rejected]: (state) => {
            console.log("Fetch failed");
            return { ...state, status: 'error' }
        },
    }
})

export const { searchProducts, setCategories, setKeyWords, choseProduct } = productsSlice.actions

export const getAllProducts = (state) => state.products.searchedProducts
export const getProductsStatus = (state) => state.products.status
export const getChosenProduct = (state) => state.products.choseProduct

export default productsSlice.reducer
