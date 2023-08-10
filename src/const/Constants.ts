import { listToDoProps, priorityColor } from './listInterface'

export const mockList : listToDoProps[] = [
  {
    id: 0,
    name: 'Wasa',
    desc: 'Comer empanadas',
    warn: 'soft',
    complete: false
  },
  {
    id: 1,
    name: 'Wasa 2',
    desc: 'Comer empanadas 2',
    warn: 'medium',
    complete: false
  },
  {
    id: 2,
    name: 'Wasa 3',
    desc: 'Comer empanadas 3',
    warn: 'danger',
    complete: false
  }
]

export const priorityColors : Record<string, priorityColor> = {
  soft: {
    color: 'green',
    name: 'Ligero'
  },
  medium: {
    color: 'orange',
    name: 'Medio'
  },
  danger: {
    color: 'red',
    name: 'Urgente'
  }
}

export const filtersOption = {
  all: 'Todos',
  inComplete: 'Activos',
  complete: 'Completados'
} as const
