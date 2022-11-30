import React from 'react';
import HomeStack from './src/navigations/HomeStack';
import {Provider} from "react-redux";
import { Store } from './src/redux/store';


const App = () => {

  return (
    <Provider store={Store}>
 <HomeStack/>
 </Provider>
  );
};

export default App;
