import React from 'react'

export default function ErrorCustom({ onClickHandler }) {
  return (
    <div className=" flex justify-center  gap-5 items-center h-[100vh]">
      <p className="text-2xl font-bold ">Page ada yg errorrrr</p>
      <button
        className="px-4 py-1 rounded-full text-slate-50 bg-slate-800"
        onClick={onClickHandler}
      >
        Reset error boundary
      </button>
    </div>
  )
}
