import{
    UPDATE_POST,
    UPDATE_COMMENT,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    REMOVE_POST,
    REMOVE_COMMENT,
    TOGGLE_DONATION
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_POST:
            return {
                ...state,
                post: [...action.post]
            };
    
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload)
            };

        case UPDATE_COMMENT:
            return {
                ...state,
                comment: [...action.comment]
            };

        case REMOVE_COMMENT:
            return {
                ...state,
                comment: state.comments.filter((comment) => comment._id !== action.payload)
            };
        
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        case TOGGLE_DONATION:
            return {
                ...state,
                donateOpen: !state.donateOpen
            };
        
        default:
            return state;
    }
}