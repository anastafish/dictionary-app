import React from 'react'

function Defination({type, defi, font, toggle}) {
  return (
    <div>
        <h1 className={`${toggle ? 'text-white' : 'text-black'} text-[30px] pt-4 font-extrabold`}>{type}</h1>
            <div>
                <h1 className={`${toggle ? 'text-white' : 'text-black'} text-[20px] w-fit font-${font} pt-5`}>Meaning</h1>
                <ul className={`${toggle ? 'text-white' : 'text-black'} flex flex-col gap-5 font-${font} list-disc `}>
                    {defi.map((def,index) => <li key={index} className='max-w-[600px]'>{def.definition}</li>)}
                </ul>
            </div>
    </div>
  )
}

export default Defination