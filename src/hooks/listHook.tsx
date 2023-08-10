import { useState } from 'react'
import { filtersOption, mockList } from '../const/Constants'
import { filtersOptionProps, idProp, priorityKeysType, titleProp } from '../const/listInterface'

export const useToDoList = () => {
  const [listToDo, setListToDo] = useState(mockList)
  const [filterToDo, setFilterToDo] = useState<filtersOptionProps>(filtersOption.all)

  const removeToDo = (id : idProp) => {
    const newToDo = listToDo.filter(toDo => toDo.id !== id)
    setListToDo(newToDo)
  }

  const completeToDo = (index : idProp) => {
    const statusComplete = !listToDo[index].complete
    const newToDo = [...listToDo]
    newToDo[index].complete = statusComplete

    setListToDo(newToDo)
  }

  const pushNewToDo = (name : titleProp, desc : titleProp, warn : priorityKeysType) => {
    const newTodo = {
      id: listToDo[listToDo.length - 1].id + 1,
      name,
      desc,
      warn,
      complete: false
    }

    setListToDo([
      ...listToDo,
      newTodo
    ])
  }

  const filterSelectToDo = () => {
    if (filterToDo === filtersOption.complete) {
      return listToDo.filter(toDo => toDo.complete === true)
    }
    if (filterToDo === filtersOption.inComplete) {
      return listToDo.filter(toDo => toDo.complete === false)
    }

    return listToDo
  }

  const changefilterToDo = (newFilter : filtersOptionProps) => setFilterToDo(newFilter)

  return {
    listToDo,
    filterToDo,
    removeToDo,
    completeToDo,
    pushNewToDo,
    filterSelectToDo,
    changefilterToDo
  }
}
