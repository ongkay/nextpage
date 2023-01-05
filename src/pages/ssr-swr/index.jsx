import Layout from '@components/Layout'
import Details from '@components/Details'
import MovieList from '@components/MovieList'
import useSWR, { SWRConfig } from 'swr'
import { getData } from '@utils/fetchData'
import ErrorCustom from '@components/ErrorCustom'

export async function getServerSideProps({ res }) {
  const data = await getData('/movie/upcoming')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  return {
    props: {
      fallback: {
        '/movie/upcoming': data,
      },
    },
  }
}

export default function Home({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Movie />
    </SWRConfig>
  )
}

function Movie() {
  const { data, error } = useSWR('/movie/upcoming', getData)

  if (error) return <ErrorCustom />
  // if (!data && !error) return <CustomLoading />

  return (
    <>
      <Layout home>
        <div className="bg-[#191919] text-white max-w-screen-2xl mx-auto overflow-x-hidden">
          <section className="pt-20 ">
            <Details
              description="Halaman ini menampilkan movie yang sedang tranding saat ini fetching data ke TMDB movie"
              text="SSR with SWR and cache control"
              time={data.timeFetch}
            />
            <MovieList results={data.results} href={'/ssr-swr'} />
          </section>
        </div>
      </Layout>
    </>
  )
}
