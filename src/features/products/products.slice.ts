import { createEntityAdapter, createSlice, EntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IProduct{
    productName: string;
    productDescription: string;
    productPrice: string;
    productQuantity: number;
    _id: string;
}

const entityAdapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>({
    selectId: (product: IProduct) => product._id
});
const productsSlice = createSlice({
    name: "products",
    initialState: entityAdapter.getInitialState(),
    reducers: {
        entityAddMany:entityAdapter.addMany,
    }
})
export const { entityAddMany: addProducts } = productsSlice.actions;
export const { selectAll: selectProducts } =entityAdapter.getSelectors((state: RootState) => state.products)


export default productsSlice;

