import { FC } from 'react'
import Container from '../UI/Container/Container'
import TodoList from '../TodoList/TodoList'
import TextField from '../TextField/TextField'

const App: FC = () => {

  console.log('app')
  return (
    <>
      <Container>
        <TodoList />
        <TextField />
      </Container>
    </>
  )
}

export default App
