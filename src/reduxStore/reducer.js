const initialState = {
    items: []
};

const removeItemFromList = (array, action) => {
    var res = array && array.length > 0 ? array.filter((item, index) => {
        return (item.id !== action.payload.id
            && item.title !== action.payload.title
            && item.genre !== action.payload.genre
        )
    }) : [];
    return res;
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: removeItemFromList(state.items, action)
            };
        case "CLEAR_ITEMS": {
            return {
                items: []
            };
        }
        default:
            return state;
    }
};
