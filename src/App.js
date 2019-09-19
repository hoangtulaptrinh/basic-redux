import React , { Component } from 'react'
import * as actions from './actions/index';
import './App.css';
// import { status , sort } from './actions/index'
//connec react-redux
import { connect } from 'react-redux';
import Tokuda from './components/Test'
import Yui_Hatano from './components/TestSwitchCase'
// const store = createStore(MyReducer);
// console.log(store.getState())
// //thực hiện công việc thay đổi status
// store.dispatch(status())
// console.log(store.getState())
// //thực hiện công việc sắp xếp name từ Z-A
// store.dispatch(sort({by:'name',value:-1}))
// console.log(store.getState())

class App extends Component{
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }
    onClick(){
      this.props.click()
    }
    render(){
      return<div className ='App'>
      <button onClick = { this.onClick }>Button1</button>
      <h1>{this.props.ahihi}</h1>
      <Tokuda />
      <Yui_Hatano />
      </div>
  }
}

//chuyển state HandleClick của store chuyển thành props có tên là ahihi
const mapStatetoProps = (state) => {
  return {
    ahihi : state.HandleClick
  }
}
//chuyển hàm dispatch action thành props có tên là click
const mapDispatchToProps = (dispatch,props) => {
  return {
    click : () =>  dispatch(actions.HandleClick()) 
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (App);