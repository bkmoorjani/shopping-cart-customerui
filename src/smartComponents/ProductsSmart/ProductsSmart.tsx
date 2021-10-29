import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/Products/Products";
import { selectProducts } from "../../features/products/products.slice";


const ProductsSmart = () => {
    const products= useSelector(selectProducts)
    return (
        <Products  products={products}></Products>
    )
    
}
export default ProductsSmart;