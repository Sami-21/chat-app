import { user } from "../../../interfaces/user"

export type authInitialState={
    id?:number;
    user:user|null;
    token:string|null;
}