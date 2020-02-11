import {
    GET_MESSAGES_BY_DATETIME_SUCCESS,
    GET_MESSAGES_SUCCESS,
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    messages: [],
    error: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.messages
            };
        case GET_MESSAGES_BY_DATETIME_SUCCESS:

            return {
                ...state,
                messages: action.messages
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                error: ''
            };
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                error: {error: action.error, status: action.status}
            };
        default:
            return state;
    }
};

export default messagesReducer;