import { filtersOption } from './Constants'
export type priorityKeysType = 'danger' | 'medium' | 'soft'

export interface listToDoProps {
    id: number
    name: string
    desc: string
    warn: priorityKeysType
    complete: boolean
}

export interface priorityColor {
    name : string,
    color : string
}

export type idProp = listToDoProps['id']
export type titleProp = listToDoProps['name']

export type filtersOptionProps = typeof filtersOption[keyof typeof filtersOption]
