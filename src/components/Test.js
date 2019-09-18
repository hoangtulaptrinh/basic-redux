import React , { Component } from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Tokuda extends Component{
    constructor(props) {
        super(props);
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
      }
onClick1(){
    this.props.nhapchuot()
}
onClick2(){
    this.props.aaaaaa()
}
    render(){
        return<div>
        <button onClick = { this.onClick1 }>{this.props.children}</button>
        <h1>{this.props.hienthi}</h1>
        <button onClick = { this.onClick2 }>ahihi</button>
        <h1>{this.props.display.value}</h1>
        </div>
    }
}

//chuyển state HandleClick của store chuyển thành props có tên là hienthi
const mapStatetoProps = (state) => {
    return {
      hienthi : state.NUMBER,
      display : state.sort
    }
  }
  //chuyển hàm dispatch action thành props có tên là nhapchuot
  const mapDispatchToProps = (dispatch,props) => {
       var  hienthi  = this.props.hienthi
    return {
      nhapchuot : () =>  dispatch(actions.Test({giatri : hienthi})) ,
      aaaaaa: () => dispatch(actions.sort({by:'name',value:-1}))
    }
  }
  
  export default connect(mapStatetoProps,mapDispatchToProps) (Tokuda);