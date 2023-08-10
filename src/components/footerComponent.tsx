import React from 'react'

import { filtersOption } from '../const/Constants'
import { filtersOptionProps } from '../const/listInterface'

interface ToDoFooterProps {
  changefilterToDo : (newFilter : filtersOptionProps) => void
}

export const ToDoFooter : React.FC<ToDoFooterProps> = ({ changefilterToDo }) => {
  const filtersOptionAray = Object.entries(filtersOption)
  return (
    <ul className='flex justify-center gap-4'>
      {
        filtersOptionAray.map((filterOption, index) => {
          const filterChecked = index === 0 ? true : undefined
          return (
            <li key={filterOption[0]} onClick={() => changefilterToDo(filterOption[1])}>
              <label className='transition-colors cursor-pointer hover:text-blue-400'>
                {filterOption[1]}
                <input className='hidden radioSelectFilter' type='radio' name='selectFilter' defaultChecked={filterChecked} />
              </label>
            </li>
          )
        })
      }
    </ul>
  )
}
