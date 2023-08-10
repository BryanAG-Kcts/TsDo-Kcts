import { ToDoFooter } from './components/footerComponent'
import { ToDoHeader } from './components/headerComponent'
import { ToDoBodyList } from './components/listComponent'
import { ToDoNew } from './components/newToDo'
import { useToDoList } from './hooks/listHook'

export function ToDoUI () {
  const { removeToDo, completeToDo, pushNewToDo, filterSelectToDo, changefilterToDo } = useToDoList()
  const listToDo = filterSelectToDo()
  return (
    <>
      <div className='flex flex-col w-full max-w-4xl gap-4 p-5 bg-white rounded'>
        <ToDoHeader />
        <div className='flex flex-col gap-4 sm:flex-row'>
          <ToDoBodyList listToDo={listToDo} removeToDo={removeToDo} completeToDo={completeToDo} />
          <ToDoNew pushNewToDo={pushNewToDo} />
        </div>
        <ToDoFooter changefilterToDo={changefilterToDo} />
      </div>
    </>
  )
}
