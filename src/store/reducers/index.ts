import { combineReducers } from "redux";
import { todosReducer } from "./todos/todos";
import { weatherReducer } from "./weather/weather";

export const rootReducer = combineReducers({
  todos: todosReducer,
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
