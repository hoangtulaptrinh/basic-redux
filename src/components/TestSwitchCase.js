import React , { Component } from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Yui_Hatano extends Component{
    constructor(props) {
        super(props);
        this.onClick111 = this.onClick111.bind(this);
        this.onClick222 = this.onClick222.bind(this);
      }
onClick111(){
    this.props.nhapchuot99()
}
onClick222(){
    this.props.aaaaaa99()
}
    render(){
        return<div>
        <button onClick = { this.onClick111 } >Button111</button>
        <h1>{this.props.hienthi999}</h1>
        <button onClick = { this.onClick222 } >Button111</button>
        </div>
    }
}

//chuyển state HandleClick của store chuyển thành props có tên là hienthi
const mapStatetoProps = (state) => {
    return {
        hienthi999 : state.Plus
    }
  }
  //chuyển hàm dispatch action thành props có tên là nhapchuot
  const mapDispatchToProps = (dispatch,props) => {
    return {
      nhapchuot99 : () =>  dispatch(actions.Plus1000()) ,
      aaaaaa99: () => dispatch(actions.Plus2000())
    }
  }
  
  export default connect(mapStatetoProps,mapDispatchToProps) (Yui_Hatano);