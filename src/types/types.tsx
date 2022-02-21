export enum TypeKeys {
   SET_IS_SCHEDULED = "SET_IS_SCHEDULED",
}

export type IS_SCHEDULED = boolean;

interface SET_IS_SCHEDULED {
   type: TypeKeys.SET_IS_SCHEDULED,
   payload: IS_SCHEDULED
}

export type ActionTypes = SET_IS_SCHEDULED;

export interface RootState {
   isScheduled: IS_SCHEDULED;
}