import { priorityColor } from './listInterface'

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
