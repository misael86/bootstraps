import * as _ from "lodash";

// ------------------------------------------------

import {DECREASE, FETCH_FULFILLED, FETCH_PENDING, INCREASE} from "./types";

// ------------------------------------------------

export interface IState {
    counter: number;
    json: Object;
    loading: boolean;
}

export const initialState: IState = {
    counter: 1,
    json: {},
    loading: false,
};

export default function homeReducer(state = initialState, action: any): IState {
    switch (action.type) {
        case DECREASE:
            return _.merge({}, state, {
               counter: state.counter - 1,
            });

        case INCREASE:
            return _.merge({}, state, {
                counter: state.counter + 1,
            });

        case FETCH_PENDING:
            return _.merge({}, state, {
                loading: true,
            });

        case FETCH_FULFILLED:
            return _.merge({}, state, {
                json: action.payload,
                loading: false,
            });

        default:
            return state;
    }
}
