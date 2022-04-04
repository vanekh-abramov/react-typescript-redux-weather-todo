import { ITodo } from "./ITodo";

export interface TodoState {
  todos: ITodo[];
}

export interface TodoAction {
  type: string;
  payload: string;
}
