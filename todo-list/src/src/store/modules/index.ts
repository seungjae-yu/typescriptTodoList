//root reducer

import { combineReducers } from "redux";
import todoReducer, { TodoState, } from "./todo";

export interface StoreState {
    todoReducer: TodoState
}

const rootReducer = combineReducers<StoreState>({
    todoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;