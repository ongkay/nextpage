import Link from 'next/link'
import Image from 'next/image'
import { imageBlur } from '@utils/imageBlur'
import apiTmdb from '@configs/apiTmdb'

export default function MovieList({ results, href }) {
  return (
    <div className="px-10 ">
      <ul className="grid grid-cols-1 gap-5 py-16 pt-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {results?.map((item) => {
          const image = item.poster_path
            ? apiTmdb.w500Image(item.poster_path)
            : 'https://raw.githubusercontent.com/CodingByGopal/React-MovieNuggets/master/src/images/male.png'

          return (
            <li key={item.id}>
              <Link href={`${href}/${item?.id}`}>
                <Image
                  className="mx-auto rounded-xl hover:opacity-80"
                  placeholder="blur"
                  blurDataURL={imageBlur}
                  quality={70}
                  width={250}
                  height={375}
                  src={image}
                  alt={item.original_title}
                  priority={true}
                />

                <p className="mt-3 text-xs text-center transition-all duration-200 hover:text-slate-300 md:text-sm">
                  {' '}
                  {item.original_title}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
