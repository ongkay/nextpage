import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import Details from '@components/Details'
import MovieList from '@components/MovieList'

export async function getStaticProps() {
  const data = await getData('/movie/upcoming')

  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}
export default function Home({ data }) {
  return (
    <>
      <Layout home>
        <div className="bg-[#191919] text-white max-w-screen-2xl mx-auto overflow-x-hidden">
          <section className="pt-20 ">
            <Details
              description="Halaman ini menampilkan movie yang sedang tranding saat ini fetching data ke TMDB movie"
              text="ISR no paths"
              time={data.timeFetch}
            />
            <MovieList results={data.results} href={'/isr-no-paths'} />
          </section>
        </div>
      </Layout>
    </>
  )
}