import React from 'react'
interface CategoryCardsProps{
  category:string
}

const CategoryCards:React.FC<CategoryCardsProps>=({category})=> {
  return (
    <div className=' text-[12px] text-slate-500'>
      {category}
    </div>
  )
}

export default CategoryCards
