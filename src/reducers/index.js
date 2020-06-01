import { combineReducers } from 'redux';

const listReducer = (list = [], action) => {
    if (action.type === 'LIST_APPENDER') {
        return [
            ...list,
            {id: action.id,
            text: action.item}
        ]
            
    }
    return list;
};

export default combineReducers({
    list: listReducer
})