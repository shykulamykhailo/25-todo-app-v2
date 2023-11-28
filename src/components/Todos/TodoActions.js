import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodoActions({ resetTodos, deleteComplitedTodos }) {
  return (
    <>
      <Button>
        <RiRefreshLine title="Reset Todos" onClick={resetTodos} />
      </Button>
      <Button title="Clear complited todos" onClick={deleteComplitedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodoActions
