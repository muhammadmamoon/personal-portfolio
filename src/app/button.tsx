import React, { FC } from 'react'

const Button:FC<{text:React.ReactNode,link:any}>=({text,link})=>{
  return (
    <section>
    <a href={link} className='  text-[#ff4d41] py-2 px-4 hover:bg-[#ff4d41] rounded inline-block mt-10 font-medium border border-[#ff4d41] hover:text-white hover: bg-transparent   transition duration-200'>{text}</a>
    </section>
  )
}

export default Button