import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/langConstants';
// import { Form } from 'react-router-dom'

const GptSearchBar = () => {
  const langkey = useSelector(store=>store.config.lang) ;
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='p-6 m-6 bg-black w-1/2 grid grid-cols-12 opacity-80'>
            <input type="text" className='p-4 m-4 col-span-10' placeholder={lang[langkey].gptSearchPlaceholder} />
            <button className='m-4 col-span-2 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langkey].search}</button>
        </form>
        
    </div>
  )
}

export default GptSearchBar