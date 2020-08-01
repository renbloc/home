

const initalState = [
    {
        isAuthenticated: false,
        isLoading: false,
        user: null
    }
];

const authReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "USER_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "USER_LOADED":
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: payload
            }
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: payload
            }
        case "AUTH_ERROR":
        case "LOGIN_FAIL":
        case "LOGOUT_SUCCESS":
        case "REGISTER_FAIL":
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        default:
            return state;
    }

};

export default authReducer;