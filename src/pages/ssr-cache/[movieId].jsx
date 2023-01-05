import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import MovieDetail from '@components/MovieDetail'

export async function getServerSideProps({ params, res }) {
  const { movieId } = params

  const data = await getData(`/movie/${movieId}`)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  return data ? { props: { data } } : { notFound: true }
}

export default function DetailMovieSsr({ data }) {
  if (!data) return <>'data id tidak di temukan'</>
  return (
    <Layout>
      <MovieDetail data={data} />
    </Layout>
  )
}
