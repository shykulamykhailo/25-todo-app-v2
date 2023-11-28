import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodoActions() {
  return (
    <>
      <Button>
        <RiRefreshLine title="Reset Todos" />
      </Button>
      <Button title="Clear complited todos">
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodoActions
