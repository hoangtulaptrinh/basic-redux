import status from './status'  // reducer status
import sort from './sort'     // sort status
import HandleClick from './HandleClick'

import { combineReducers } from 'redux'; // mục đích để ghép các reducer nhỏ lại với nhau

const myReducer = combineReducers({
    status : status,    // state status lấy ra từ ruducer status
    sort : sort ,        // state sort lấy ra từ reducer sort
    HandleClick : HandleClick
});

export default myReducer;