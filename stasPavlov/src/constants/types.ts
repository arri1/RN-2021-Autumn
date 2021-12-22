import { ReactChildren, ReactNode } from 'react'

export interface Todo {
  text: string
  isChecked: boolean
  id: string
  heading: string
  timestamp: Date
}

export interface CustomText {
  style?: object
  children: ReactNode
}

export interface SVGIcon {
  color?: string
}
