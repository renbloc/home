

const initalState = [
    {
        loading: false,
        users: []
    }
];

const formReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "AWAITING_WORKERS":
            return {
                ...state,
                loading: true
            }
        case "REJECTED_WORKERS":
            return {
                ...state,
                loading: false
            }
        case "SUCCESS_WORKERS":
            return {
                ...state,
                loading: false,
                users: payload
            }
        default:
            return state;
    }

    return state;
};

export default formReducer;