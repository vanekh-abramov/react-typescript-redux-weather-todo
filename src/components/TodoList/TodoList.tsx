import { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ITodo } from '../../types/ITodo'
import TodoItem from '../TodoItem/TodoItem'

const TodoList: FC = () => {
  const { todos } = useTypedSelector((state) => state.todos)
  const { loading, error } = useTypedSelector((state) => state.weather)

  return (
    <>
      {todos.map((todo: ITodo, index: number) => (
        <TodoItem key={todo.id} id={todo.id} body={todo.body} index={index} />
      ))}
      {loading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
    </>
  )
}

export default TodoList
