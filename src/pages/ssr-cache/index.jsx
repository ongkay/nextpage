import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import Details from '@components/Details'

import MovieList from '@components/MovieList'

export async function getServerSideProps({ res }) {
  const data = await getData('/movie/upcoming')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  return {
    props: {
      data,
    },
  }
}
export default function Home({ data }) {
  return (
    <>
      <Layout home>
        <div className="bg-[#191919] text-white max-w-screen-2xl mx-auto overflow-x-hidden">
          <section className="pt-20 ">
            <Details
              description="Halaman ini menggunakan SSR fetching data ke TMDB movie menampilkan movie yang sedang tranding saat ini."
              text="SSR with cache control"
              time={data.timeFetch}
            />
            <MovieList results={data.results} href={'/ssr-cache'} />
          </section>
        </div>
      </Layout>
    </>
  )
}
