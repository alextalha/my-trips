import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })
import LinkWrapper from '../components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} arial-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}
