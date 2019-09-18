var initialState = 10;
  
  var myReducer = (state = initialState, action) => {
    if(action.type === 'Test'){
      state = state + action.abc.giatri;
      return state;
    }
    return state;
  }

export default myReducer;