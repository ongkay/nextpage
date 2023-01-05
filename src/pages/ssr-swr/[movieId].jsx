import { getData } from '@utils/fetchData'
import Layout from '@components/Layout'
import MovieDetail from '@components/MovieDetail'
import { useRouter } from 'next/router'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import ErrorCustom from '@components/ErrorCustom'
import CustomLoading from '@components/CustomLoading'

export async function getServerSideProps({ params, res }) {
  const { movieId } = params

  const data = await getData(`/movie/${movieId}`)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

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
  if (!data && !error) return <CustomLoading />

  return (
    <Layout>
      <MovieDetail data={data} />
    </Layout>
  )
}
