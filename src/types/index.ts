export type User = {
  username: string;
};
export interface TravelLog {
  user: User;
  id: number | string;
  imgSet?: string[];
  dateModified: Date;
  rating: number;
  location: string;
  caption?: string;
  likes: number;
  visited: boolean;
}

export type TravelLogState = Array<TravelLog>
export enum LogActionType {
  BOOKMARK = "BOOKMARK"
}

export interface LogAction {
  type: LogActionType;
  payload: {
    id: number | string;
  }
}
