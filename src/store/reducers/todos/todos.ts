import { ITodo } from "../../../types/ITodo";
import { TodoAction, TodoState } from "../../../types/todo";
import { date } from "../../../utils/date";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const initialState: TodoState = {
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      if (!action.payload) {
        return state;
      }

      const body = {
        id: Number(performance.now().toFixed(0)),
        body: action.payload,
        date: date(),
      };

      return {
        ...state,
        todos: [...state.todos, body],
      };

    case REMOVE_TODO:
      const removedById = state.todos.filter(
        (todo: ITodo) => todo.id !== Number(action.payload)
      );

      return {
        ...state,
        todos: removedById,
      };
    default:
      return state;
  }
};
