import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import MovieDetail from '@components/MovieDetail'

export async function getServerSideProps({ params }) {
  const { movieId } = params

  const data = await getData(`/movie/${movieId}`)

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
