import { DECREASE, INCREASE } from "./types";

// ------------------------------------------------

export const initialState = 1;
export default function homeReducer(state= initialState, action: any) {
    switch (action.type) {
        case DECREASE:
            state -= 1;
            break;

        case INCREASE:
            state += 1;
            break;

        default:
            return state;
    }

    return state;
}
