import React from 'react'

export default function Details({ text, description, time }) {
  return (
    <div className="moveBottomAnimation text-[#eee]  px-10  ">
      <h3 className="mt-6 text-lg font-bold text-center text-red-500 md:text-2xl ">{`Last Update : ${time}`}</h3>
      <h1 className="mt-5 text-xl font-bold text-center md:text-3xl">{text}</h1>
      <p className="mt-3 text-xs italic text-center md:text-sm">
        {description}
      </p>
    </div>
  )
}
