
import { Inter } from 'next/font/google'
import Homes from '@/src/components/homes/Homes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Homes />
    </>
  )
}
