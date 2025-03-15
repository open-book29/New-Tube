import React from 'react'
import { CategoriesSection } from './categories-section'

interface HomeViewProps {
    categoryId?: string
}


export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className='max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gapy-6'>
        <CategoriesSection categoryId={categoryId} />
    </div>
  )
}
