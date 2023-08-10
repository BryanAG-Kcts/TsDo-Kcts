import React from 'react'
import { priorityColors } from '../const/Constants'
import { priorityKeysType, titleProp } from '../const/listInterface'

interface ToDoNewProps {
  pushNewToDo : (name : titleProp, desc : titleProp, warn : priorityKeysType) => void
}

export const ToDoNew : React.FC<ToDoNewProps> = ({ pushNewToDo }) => {
  const submitToDo = (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, desc, warn } = Object.fromEntries(new FormData(e.target))

    pushNewToDo(name as string, desc as string, warn as priorityKeysType)
    e.target.reset()
  }

  return (
    <form onSubmit={(e : React.ChangeEvent<HTMLFormElement>) => submitToDo(e)} className='flex flex-col justify-center gap-3 p-3 bg-gray-100 rounded'>
      <input name='name' className='rounded ' type='text' placeholder='nombre de la tarea' />
      <textarea name='desc' className='rounded resize-none' placeholder='Descripción de la tarea' />

      <select name='warn' className='rounded'>
        {
          Object.keys(priorityColors).map(key => <option key={key} value={key}>{priorityColors[key].name}</option>)
        }
      </select>

      <button className='px-4 py-2 bg-white rounded-lg' type='submit'>Crear tarea</button>
    </form>
  )
}
