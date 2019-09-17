import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { status , sort } from './actions/index'
import MyReducer from './reduces/index'

import Test from './components/Test'

const store = createStore(MyReducer);
console.log(store.getState())
//thực hiện công việc thay đổi status
store.dispatch(status())
console.log(store.getState())
//thực hiện công việc sắp xếp name từ Z-A
store.dispatch(sort({by:'name',value:-1}))
console.log(store.getState())


function App() {
  return (
    <div className="App">
      <Test>Chạm Vào Em Đi</Test>
    </div>
  );
}

export default App;