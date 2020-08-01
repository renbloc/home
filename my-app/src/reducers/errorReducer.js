

const initalState = [
    {
        msg: {},
        status: null,
        id: null
    }
];

const authReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "GET_ERRORS":
            return {
                msg:  payload.msg,
                status: payload.status,
                id: payload.id
            }
        case "CLEAR_ERROR":
            return {
                msg: {},
                status: null,
                id: null
            }
        default:
            return state;
    }

    return state;
};

export default authReducer;