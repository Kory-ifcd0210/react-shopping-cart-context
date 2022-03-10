import React, { useReducer} from "react";

import ProductsContext from "../Context/ProductsContext";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

// const from App
const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";

const SAVE_NEW_PRODUCT = "saveNewProduct";

function productsReducer(state,action){
    switch (action.type) {
        case SAVE_NEW_PRODUCT :
            {
                const products = state;
                products.push(action.newProduct)
                return products;
            }

        default:
            {
                return state;
            }
    }
}


function ProductsContextProvider({children}){
    // initial state like App const
    const productInitialState= loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []);

    const [productsState, setProductsState] = useReducer(productsReducer,productInitialState);

    function saveNewProduct(newProduct){
        setProductsState({type: SAVE_NEW_PRODUCT,
        newProduct: newProduct })
    }

    return (
        <ProductsContext.Provider value={{
            products: productsState,
            saveNewProduct: saveNewProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;