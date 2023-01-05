import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import MovieDetail from '@components/MovieDetail'
import { useRouter } from 'next/router'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import ErrorCustom from '@components/ErrorCustom'

export async function getStaticPaths() {
  const data = await getData('/movie/upcoming')
  const paths = data?.results?.map((item) => ({
    params: { movieId: item.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const { movieId } = params
  const data = await getData(`/movie/${movieId}`)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      fallback: {
        [unstable_serialize(`/movie/${movieId}`)]: data,
      },
    },
    revalidate: 60,
  }
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <DetailMovie />
    </SWRConfig>
  )
}

function DetailMovie() {
  const router = useRouter()
  const { movieId } = router.query
  const { data, error } = useSWR(`/movie/${movieId}`, getData)

  if (error) return <ErrorCustom />

  return (
    <Layout>
      <MovieDetail data={data} />
    </Layout>
  )
}
