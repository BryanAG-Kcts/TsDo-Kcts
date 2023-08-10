import { useState } from 'react'
import { filtersOption } from '../const/Constants'
import { filtersOptionProps, idProp, priorityKeysType, titleProp, listToDoPropsDefault, listToDoProps } from '../const/listInterface'

export const useToDoList = () => {
  const [listToDo, setListToDo] = useState<listToDoPropsDefault>(() => {
    const list = window.localStorage.getItem('list')
    const todoList = list ? JSON.parse(list) : []
    return todoList
  })
  const [filterToDo, setFilterToDo] = useState<filtersOptionProps>(filtersOption.all)

  const setStorageItem = (listToDo : listToDoProps[]) => window.localStorage.setItem('list', JSON.stringify(listToDo))

  const removeToDo = (id : idProp) => {
    const newToDo = listToDo.filter(toDo => toDo.id !== id)
    setListToDo(newToDo)
    setStorageItem(newToDo)
  }

  const completeToDo = (index : idProp) => {
    const statusComplete = !listToDo[index].complete
    const newToDo = [...listToDo]
    newToDo[index].complete = statusComplete

    setListToDo(newToDo)
    setStorageItem(newToDo)
  }

  const pushNewToDo = (name : titleProp, desc : titleProp, warn : priorityKeysType) => {
    const newTodo = {
      id: listToDo[listToDo.length - 1]?.id + 1 || 0,
      name,
      desc,
      warn,
      complete: false
    }

    const newTodoList = [
      ...listToDo,
      newTodo
    ]

    setListToDo(newTodoList)
    setStorageItem(newTodoList)
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
