import { VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <VStack>
      <Header />
    </VStack>
  )
}

export default Home
