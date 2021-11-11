import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";


export interface CommonState {
    rootConfig: any;
}

const initialState: CommonState = {
    rootConfig: {}
}

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setRootConfig: (state, action) => {
            state.rootConfig = action.payload
        }
    }
})
export const { setRootConfig } = commonSlice.actions;
export const selectShoppinCartApiPrefix =
    (state: RootState) => state.common.rootConfig.serverDetails.shoppingCartApiPrefix;
export default commonSlice;