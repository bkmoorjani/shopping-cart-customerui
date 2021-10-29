import createSagaMiddleware from '@redux-saga/core';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import commonSlice from '../features/common/common.slice';
import counterReducer from '../features/counter/counterSlice';
import productsSlice from '../features/products/products.slice';
import getProductsSaga from '../sagas/getProducts.saga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware:(getMiddleware)=>[...getMiddleware(),sagaMiddleware],
  reducer: {
    counter: counterReducer,
    products: productsSlice.reducer,
    common : commonSlice.reducer
  },
});
sagaMiddleware.run(getProductsSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
