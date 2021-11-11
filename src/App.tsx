import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { setRootConfig } from './features/common/common.slice';
import ShoppingCartSmart from './smartComponents/ShoppingCart/ShoppingCartSmart';


export interface AppProps{
  rootConfig: any;
}

const App = (props: AppProps) => {

  const { rootConfig } = props;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setRootConfig(rootConfig))
  }, [rootConfig,dispatch]);

  
  useEffect(() => {
    dispatch({type:"GET_PRODUCTS"})
  },[dispatch])
  return (
    <div className="App">
     <ShoppingCartSmart></ShoppingCartSmart>

    </div>
  );
}

export default App;
