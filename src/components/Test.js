import React , { Component } from 'react'
import { createStore } from 'redux';
import MyReducer from '../reduces/index'
import { HandleClick } from '../actions';

const store = createStore(MyReducer);

class Test extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
      }
onClick(){
    store.dispatch(HandleClick())
    console.log(store.getState().HandleClick)
}
    render(){
        return<div>
        <button onClick = { this.onClick }>{this.props.children}</button>
        <h1>{store.getState().HandleClick}</h1>
        </div>
    }
}

export default Test;