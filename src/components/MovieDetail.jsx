'use client'
import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { imageBlur } from '@utils/imageBlur'
import apiTmdb from '@configs/apiTmdb'
import { useRouter } from 'next/navigation'

export default function MovieDetail({ data }) {
  const router = useRouter()

  return (
    <section className=" flex flex-col justify-center items-center h-screen px-5 bg-gradient-to-t from-[#121212] to-[#a0a0a0]">
      <h3 className="px-5 py-3 mt-16 mb-6 text-lg font-bold text-center text-red-600 md:mt-0 bg-amber-300 md:text-2xl">{`Last Update : ${data.timeFetch}`}</h3>
      <div className="moveBottomAnimation flex flex-col md:flex-row relative max-w-2xl mx-auto bg-[#222] shadow-2xl shadow-black rounded-xl p-10">
        <Image
          className="w-56 border rounded-xl"
          placeholder="blur"
          blurDataURL={imageBlur}
          quality={70}
          width={250}
          height={375}
          src={apiTmdb.w500Image(data?.poster_path || data?.backdrop_path)}
          alt={data?.title}
        />

        <div className="w-full ml-5 md:w-1/2 grow">
          <p className="mt-2 mb-3 text-lg md:text-2xl md:mt-0">
            {data?.title || data?.original_title}
          </p>

          <div className="flex flex-col md:items-center md:flex-row">
            <div className="flex flex-row pb-2 mr-5">
              <AiFillStar className="mr-2 text-3xl" color="#EAB308" />
              <p className="text-3xl ">{data?.vote_average?.toFixed(1)} </p>
            </div>

            <div className="flex flex-col">
              <div className="grid grid-flow-col gap-4 auto-cols-max ">
                <p className="text-sm text-cyan-600 md:text-base">
                  Released: {data?.release_date}{' '}
                </p>
                <p className="text-sm text-cyan-600 md:text-base">
                  {data?.runtime} min
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="text-sm text-neutral-300 line-clamp-6 ">
              <strong>Overview: </strong> {data?.overview}
            </h4>
          </div>

          <button
            onClick={() => router.back()}
            className="px-4 py-1 mt-5 text-white transition-all delay-200 bg-red-600 rounded-full hover:bg-red-700"
          >
            Back to home page
          </button>
        </div>
      </div>
    </section>
  )
}
