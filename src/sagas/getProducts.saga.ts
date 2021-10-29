
import axios from "axios";
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { customAxios } from "..";

import { selectShoppinCartApiPrefix } from "../features/common/common.slice";
import { addProducts } from "../features/products/products.slice";

function* getProducts(action: any) {

    const apiAxios = customAxios.shoppingCart();
    //const apiPrefix:string = yield select(selectShoppinCartApiPrefix);
    const { data: products } = yield call(apiAxios.get, `/products`);
    yield put(addProducts(products));  //create slice for this
}

function* getProductsSaga() {
    yield takeEvery("GET_PRODUCTS", getProducts);
    
}
export default getProductsSaga;