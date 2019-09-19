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
    this.props.Plus1000()
}
onClick222(){
    this.props.Plus2000()
}
    render(){
        return<div>
        <button onClick = { this.onClick111 } >Button + 1000</button>
        <h1>{this.props.hienthiprops}</h1>
        <button onClick = { this.onClick222 } >Button + 2000</button>
        </div>
    }
}

//chuyển state HandleClick của store chuyển thành props có tên là hienthi
const mapStatetoProps = (state) => {
    return {
        hienthiprops : state.Plus
    }
  }
  //chuyển hàm dispatch action thành props có tên là nhapchuot
  const mapDispatchToProps = (dispatch,props) => {
    return {
      Plus1000 : () =>  dispatch(actions.Plus1000()) ,
      Plus2000: () => dispatch(actions.Plus2000())
    }
  }
  
  export default connect(mapStatetoProps,mapDispatchToProps) (Yui_Hatano);