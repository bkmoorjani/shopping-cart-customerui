import React, { useMemo } from "react";
import { IProduct } from "../../features/products/products.slice";
import Product from "../Product/Product";


const Products = (props: any) => {

    const { products } = props;
    const productsUI = useMemo(() => {
        return products.map((product: IProduct) => <Product key={product._id} {...product}></Product>)
    }, [products])
    return (
        <div>
            <div>{productsUI}</div>
        </div>
    )
}

export default Products;