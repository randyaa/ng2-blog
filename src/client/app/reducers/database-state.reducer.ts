import {Action, Reducer} from "@ngrx/store";

import {DatabaseState} from "../ng2-blog.store";
import {mergeArrays} from "../utils/reducer.util";

let initialState = <DatabaseState>{
    entities: {
    }
};

// Updates an entity cache in response to any action with response.entities.
export const databaseState:Reducer<DatabaseState> = (state = initialState, action:Action) => {
    if (action.payload && action.payload.entities) {
        //@todo - handle deletes
        return Object.assign({}, state, {
            entities: Object.assign({}, state.entities, action.payload.entities, mergeArrays)
        });
    }
    return state;
};
