import { user } from "../../../interfaces/user";

export type authInitialState = {
  id?: number;
  user: object | null;
  token: string | null;
};
