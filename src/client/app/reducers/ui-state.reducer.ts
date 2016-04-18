import {Reducer, Action} from "@ngrx/store";

import {UiState} from "../ng2-blog.store";
import {mergeArrays} from "../utils/reducer.util";

let initialState = <UiState>{
};

export const uiState:Reducer<UiState> = (state = initialState, action:Action) => {
    if (action.payload && !action.payload.entities) {
        // return Object.assign({}, state, action.payload);
        return Object.assign({}, state, action.payload, mergeArrays);
    } else {
        return state;
    }
};
