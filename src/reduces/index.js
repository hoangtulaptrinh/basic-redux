import status from './status'  // reducer status
import sort from './sort'     // sort status
import HandleClick from './HandleClick'
import Test from './Test'
import Plus from './Plus'

import { combineReducers } from 'redux'; // mục đích để ghép các reducer nhỏ lại với nhau

const myReducer = combineReducers({
    status : status,    // state status lấy ra từ ruducer status
    sort : sort ,        // state sort lấy ra từ reducer sort
    HandleClick : HandleClick,
    NUMBER : Test,
    Plus : Plus,
});

export default myReducer;