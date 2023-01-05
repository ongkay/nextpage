/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr'
import MovieDetail from '@components/MovieDetail'
import { getData } from '@utils/fetchData'
import CustomLoading from '@components/CustomLoading'
import ErrorCustom from '@components/ErrorCustom'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'

export default function DetailMovieCsr() {
  const router = useRouter()
  const { movieId } = router.query
  const { data, error } = useSWR(`/movie/${movieId}`, getData)

  if (error) return <ErrorCustom />
  if (!data && !error) return <CustomLoading />

  return (
    <Layout>
      <MovieDetail data={data} href={'/csr'} />
    </Layout>
  )
}
