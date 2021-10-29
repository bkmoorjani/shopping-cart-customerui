import React from "react";
import { IProduct } from "../../features/products/products.slice";

const Product = (props: IProduct) => {
    const { productName, productDescription, productPrice, productQuantity } = props;
    return (
        <div>
            <div>{productName}</div>
            <div>{productDescription}</div>
            <div>{productPrice}</div>
            <div>{productQuantity}</div>

        </div>
    )
}

export default Product;