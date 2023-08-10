import React from 'react'

import { priorityColors } from '../const/Constants'
import { idProp, listToDoProps } from '../const/listInterface'

interface ToDoBodyListProps {
  listToDo : listToDoProps[]
  removeToDo : (id : idProp) => void
  completeToDo : (id : idProp) => void
}

export const ToDoBodyList : React.FC<ToDoBodyListProps> = ({ listToDo, removeToDo, completeToDo }) => {
  if (listToDo.length === 0) return <p>No se encontraron resultados</p>

  return (
    <main className='flex flex-col flex-1 gap-4'>
      {
        listToDo.map((toDo, index) => {
          const priorityColor = toDo.warn
          const disableToDo = toDo.complete ? 'opacity-70' : null

          return (
            <span key={toDo.id} className={'flex flex-col gap-2 p-3 bg-slate-100 rounded-xl ' + disableToDo}>

              <div className='flex items-center gap-5'>
                <input defaultChecked={toDo.complete} onChange={() => completeToDo(index)} type='checkbox' name='wasa' className='w-5 h-5 rounded-full' />

                <h3 className='text-lg font-semibold tracking-widest' style={{ color: priorityColors[priorityColor].color }}>{toDo.name}</h3>
              </div>

              <p>{toDo.desc}</p>

              <div className='flex justify-end w-full'>
                <span onClick={() => removeToDo(toDo.id)} className='w-3 h-3 bg-red-600 rounded-full cursor-pointer' title='Eliminar' />
              </div>
            </span>
          )
        })
      }
    </main>
  )
}
