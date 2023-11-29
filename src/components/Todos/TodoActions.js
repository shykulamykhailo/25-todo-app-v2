import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodoActions({
  resetTodos,
  deleteComplitedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear complited todos" onClick={deleteComplitedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodoActions
