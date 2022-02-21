import { ActionTypes, IS_SCHEDULED, TypeKeys } from '../types/types';

export function setIsScheduled(payload: IS_SCHEDULED): ActionTypes {
   return {
      type: TypeKeys.SET_IS_SCHEDULED,
      payload
   }
}
