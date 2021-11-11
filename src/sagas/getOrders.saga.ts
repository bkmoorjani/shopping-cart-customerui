
import { call, put, takeEvery } from 'redux-saga/effects';
import { customAxios } from "..";
import { addOrders } from "../features/orders/orders.slice";

function* getOrders(action: any) {

    const apiAxios = customAxios.shoppingCart();
    //const apiPrefix:string = yield select(selectShoppinCartApiPrefix);
    const { data: orders } = yield call(apiAxios.get, `/orders`);
    yield put(addOrders(orders));  //create slice for this
}

function* getOrdersSaga() {
    yield takeEvery("GET_ORDERS", getOrders);
    
}
export default getOrdersSaga;