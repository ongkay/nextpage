import React from 'react'

export default function Footer() {
  const fullYear = new Date().getFullYear()
  return (
    <div className=" bg-[#121212]  shadow-2xl shadow-black max-w-screen-2xl mx-auto  text-white flex justify-center items-center p-7">
      <p>
        &copy; {fullYear} NextApp13 by{' '}
        <a
          className="text-blue-500 underline "
          target="_blank"
          rel="noopener noreferrer"
          href="https://google.com"
        >
          ongkay
        </a>
      </p>
    </div>
  )
}
