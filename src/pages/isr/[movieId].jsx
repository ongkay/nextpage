import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import MovieDetail from '@components/MovieDetail'

export async function getStaticPaths() {
  const data = await getData('/movie/upcoming')

  const paths = data?.results?.map((item) => ({
    params: { movieId: item.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { movieId } = params
  const data = await getData(`/movie/${movieId}`)

  return data ? { props: { data }, revalidate: 60 } : { notFound: true }
}

export default function DetailMovieSsr({ data }) {
  if (!data) return <>'data id tidak di temukan'</>
  return (
    <Layout>
      <MovieDetail data={data} />
    </Layout>
  )
}
