var initialState = {
      by : 'ahihi',
      value : 99
  }
  
  var myReducer = (state = initialState, action) => {
    if(action.type === 'SORT'){
      return {
          by : action.sort.by,
          value : action.sort.value
      }
    }
    return state;
  }

  export default myReducer;