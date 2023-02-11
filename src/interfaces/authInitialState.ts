import { user } from "../interfaces/user"

export type authInitialState={
    user:user|null;
    token:string|null;
}