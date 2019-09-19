var initialState = 0;
  
  var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Plus1000':
          return state = state + 1000
        case 'Plus2000':
          return state = state + 2000
        default:
          return state
      }
    }

export default myReducer;