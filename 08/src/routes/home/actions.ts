import * as repository from "../../repositories/crud";
import { DECREASE, FETCH, INCREASE } from "./types";

// ------------------------------------------------

export function decrease() {
    return {
        type: DECREASE,
    };
}

export function increase() {
    return {
        type: INCREASE,
    };
}

export function loadError() {
    return {
        payload: repository.get(""),
        type: FETCH,
    };
}

export function fetchSuccess() {
    return {
        payload: repository.get(""),
        type: FETCH,
    };
}
