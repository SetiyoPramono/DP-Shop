import Head from 'next/head'
import Layout from '../../../components/landingpage/utils/layout'
import ChartComponent from '../../../components/landingpage/chart/chart'

export default function Index() {
  return (
    <>
      <Head>
        <title>Chart</title>
      </Head>
      <Layout>
        <ChartComponent/>
      </Layout>
    </>
  )
}
