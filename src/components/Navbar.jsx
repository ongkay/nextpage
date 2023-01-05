import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { usePathname } from 'next/navigation'

const linkList = [
  {
    name: 'CSR with SWR',
    path: '/csr',
  },
  {
    name: 'SSG',
    path: '/',
  },

  {
    name: 'SSG no paths',
    path: '/ssg',
  },
  {
    name: 'SSG with SWR',
    path: '/ssg-swr',
  },
  {
    name: 'ISR',
    path: '/isr',
  },
  {
    name: 'ISR no paths',
    path: '/isr-no-paths',
  },
  {
    name: 'ISR with SWR',
    path: '/isr-swr',
  },
  {
    name: 'SSR',
    path: '/ssr',
  },
  {
    name: 'SSR with cache control',
    path: '/ssr-cache',
  },
  {
    name: 'SSR with SWR',
    path: '/ssr-swr',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <div className="fixed  max-w-screen-2xl shadow-2xl shadow-black   w-full z-50  bg-[#121212]">
      <div className="relative px-5 py-5 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <p className="text-xl font-bold md:text-4xl">
              Next<span className="font-extrabold text-red-600 ">Page</span>
            </p>
          </Link>

          <div className="text-2xl " onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </div>
      <div
        className={`${
          open
            ? '-translate-x-full opacity-100 pointer-events-auto visible'
            : ' opacity-0  pointer-events-none invisible'
        } absolute left-full shadow-black shadow-2xl  lg:w-1/4 md:w-2/5 sm:w-1/2  w-3/5 h-screen      bg-[#121212]  transition-all duration-300`}
      >
        <ul className="flex flex-col justify-center gap-6 px-3 text-white shadow-2xl md:px-6 shadow-black md:pt-20 pt-14">
          {linkList.map((item, i) => {
            return (
              <Link key={i} onClick={() => setOpen(false)} href={item.path}>
                <li
                  className={`${
                    pathname === item.path
                      ? ' bg-red-600  cursor-not-allowed border-red-600 '
                      : 'hover:bg-white hover:text-black cursor-pointer'
                  }  px-2 md:py-0 py-2 rounded  border md:text-sm text-xs  transition-all  duration-300`}
                >
                  <div className="flex items-center justify-center p-1 md:p-3 sm:p-2">
                    <p>{item.name}</p>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
