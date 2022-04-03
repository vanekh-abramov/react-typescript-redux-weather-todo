import { ADD_TODO, REMOVE_TODO } from '../../reducers/todos/todos'

export const addTodo = (todo: string) => ({
  type: ADD_TODO,
  payload: todo,
})

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
})
