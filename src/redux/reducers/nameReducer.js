const CHANGE_NAME = "CHANGE_NAME";

const initialState = {
    name: "null",
};

function nameReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            state.name = action.value;
            return state;
        default:
            return state;
    }
}

export default nameReducer;
