import { Store, createStore, combineReducers } from "redux";
import scheduleReducer from "../reducers/scheduleReducer";
import { RootState } from "../types/types";

const rootReducer = combineReducers<RootState>({
   isScheduled: scheduleReducer
});

const configureStore = (): Store => {
   return createStore(rootReducer);
}

export default configureStore;