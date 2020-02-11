import axiosApp from "../../axios-app";
import {
    GET_MESSAGES_BY_DATETIME_SUCCESS,
    GET_MESSAGES_SUCCESS,
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_SUCCESS
} from "./actionTypes";

export const getMessagesSuccess = messages => ({type: GET_MESSAGES_SUCCESS, messages});
export const sendMessageSuccess = () => ({type: SEND_MESSAGE_SUCCESS});
export const sendMessageFailure = (error, status) => ({type: SEND_MESSAGE_FAILURE, error, status});
export const getMessagesByDatetimeSuccess = messages => ({type: GET_MESSAGES_BY_DATETIME_SUCCESS, messages});

export const postMessage = message => {
    return async (dispatch) => {
        try {
            await axiosApp.post('/', message);
            dispatch(sendMessageSuccess());
        } catch (e) {
            dispatch(sendMessageFailure(e.response.data.error, e.response.status));
        }
        dispatch(getMessages());
    }
};

export const getMessages = () => {
    return async (dispatch) => {
        const response = await axiosApp.get('/messages');
        dispatch(getMessagesSuccess(response.data));
    }
};

export const getMessagesByDatetime = date => {
    return async (dispatch) => {
            try {
                const response = await axiosApp.get(`/messages?datetime=${date}`);
                console.log(response.data);
                dispatch(getMessagesByDatetimeSuccess(response.data));

            } catch (e) {
                dispatch(sendMessageFailure(e.response.data.error, e.response.status));
                console.log(e);
            }
    }
};