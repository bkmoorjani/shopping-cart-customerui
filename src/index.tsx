import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const createAxiosInstance = (baseURL: string) => axios.create({
  baseURL
});

let rootConfig:any = null;

export const customAxios = {
  shoppingCart: () => createAxiosInstance(rootConfig?.serverDetails?.shoppingCartApiPrefix),
  anotherServer: () => createAxiosInstance(rootConfig?.serverDetails?.anotherPrefix)
}

const renderRootApp = (rootConfig: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App rootConfig={rootConfig} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
axios.get("./config/config.json").then((response) => {
  console.log(response.data);
  //(window as any).GLOBAL_CONFIG = response.data;
  renderRootApp(response.data);
  rootConfig = response.data
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
