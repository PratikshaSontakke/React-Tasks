import React, {useState, useContext} from "react";
import ItemList from "../Components/Items";

export const ProductContext = useContext();

const contextProd = ({children})=> {
    const [products, setProducts] = useState(ItemList);

    return (
        <ProductContext.Provider values ={{products, setProducts}}> {children} </ProductContext.Provider>
    )
}

export default contextProd;