// import { getData } from '@src/utils/fetchData'
import Layout from '@components/Layout'
import Details from '@components/Details'
import MovieList from '@components/MovieList'
import useSWR, { SWRConfig } from 'swr'
import { getData } from '@utils/fetchData'
import ErrorCustom from '@components/ErrorCustom'

export async function getStaticProps() {
  const data = await getData('/movie/upcoming')

  return {
    props: {
      fallback: {
        '/movie/upcoming': data,
      },
    },
    revalidate: 60,
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

  return (
    <>
      <Layout home>
        <div className="bg-[#191919] text-white max-w-screen-2xl mx-auto overflow-x-hidden">
          <section className="pt-20 ">
            <Details
              description="Halaman ini menampilkan movie yang sedang tranding saat ini fetching data ke TMDB movie"
              text="ISR with SWR"
              time={data.timeFetch}
            />
            <MovieList results={data.results} href={'/isr-swr'} />
          </section>
        </div>
      </Layout>
    </>
  )
}
