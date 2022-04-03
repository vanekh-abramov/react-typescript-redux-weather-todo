import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { removeTodo } from '../../store/actions/todos/actions'
import { degreesToCelsius } from '../../utils/degreesToCelsius'
import { WEATHER_IMG } from './../../constants/externalLinks'
import classes from './TodoItem.module.css'

interface TodoItemProps {
  id: number
  body: string
  index: number
}

const TodoItem: FC<TodoItemProps> = ({ id, body, index }) => {
  const { weatherData } = useTypedSelector((state) => state.weather)
  const { todos } = useTypedSelector((state) => state.todos)
  const dispatch = useDispatch()

  const onRemoveTodo = (id: number) => {
    return () => {
      dispatch(removeTodo(Number(id)))
    }
  }

  return (
    <>
      <div className={classes.todoItem}>
        {body}
        <span className={classes.cross} onClick={onRemoveTodo(id)}>
          &#10060;
        </span>
        {!!Object.keys(weatherData).length && (
          <div>
            <img
              src={`${WEATHER_IMG}/${weatherData[index]?.weather[0].icon}.png`}
              alt={weatherData[index]?.weather[0].main}
            />
            <div>{weatherData[index]?.weather[0].main}</div>
            {todos[index].date}
            <div>{degreesToCelsius(weatherData[index]?.main.temp)}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default TodoItem
