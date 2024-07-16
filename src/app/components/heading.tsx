import React, { FC } from 'react'

const Heading:FC<{title:React.ReactNode}>=({title})=> {
  return (
    <section>
    <div className=' text-[#232940] text-[32px] h-[2px] font-medium flex items-center gap-4 justify-center py-16'>
        {title}
        <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>
    </section>
  )
}

export default Heading