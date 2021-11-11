import { createEntityAdapter, createSlice, EntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IOrder{
    _id: string;
    orderRefNo: string;
    custId: string;
    products: object;
    status: string;
}

const entityAdapter: EntityAdapter<IOrder> = createEntityAdapter<IOrder>({
    selectId: (order: IOrder) => order._id
});
const ordersSlice = createSlice({
    name: "orders",
    initialState: entityAdapter.getInitialState(),
    reducers: {
        entityAddMany:entityAdapter.addMany,
    }
})
export const { entityAddMany: addOrders } = ordersSlice.actions;
export const { selectAll: selectOrders } =entityAdapter.getSelectors((state: RootState) => state.orders)


export default ordersSlice;