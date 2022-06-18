import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Header from '../components/Header'
import IconGroup from '../components/IconGroup'


const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <IconGroup/>
    </>
  )
}

export default Home
