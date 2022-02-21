import { SET_IS_SCHEDULED } from "../constants";
import { ActionTypes } from "../types/types";

const initialState: boolean = false;
const scheduleReducer = (state: boolean = initialState, action: ActionTypes) => {
   switch (action.type) {
      case SET_IS_SCHEDULED:
         return action.payload;
      default:
         return state;
   }
}

export default scheduleReducer;