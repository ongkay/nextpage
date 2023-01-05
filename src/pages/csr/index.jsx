import React from 'react'
import Details from '@components/Details'
import { getData } from '@utils/fetchData'
import MovieList from '@components/MovieList'
import useSWR from 'swr'
import CustomLoading from '@components/CustomLoading'
import ErrorCustom from '@components/ErrorCustom'
import Layout from '@components/Layout'

export default function HomeCsr() {
  const { data, error } = useSWR('/movie/upcoming', getData)

  if (error) return <ErrorCustom />
  if (!data && !error) return <CustomLoading />
  return (
    <Layout>
      <section className="pt-20 ">
        <Details
          text="CSR with SWR"
          time={data.timeFetch}
          description="Halaman ini menampilkan movie yang sedang tranding saat ini fetching data ke TMDB movie"
        />

        <MovieList results={data.results} href={'/csr'} />
      </section>
    </Layout>
  )
}
